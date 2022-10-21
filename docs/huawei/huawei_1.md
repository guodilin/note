# 案例库
## 1. 华为防火墙端口回流
1. 服务器端口映射
   ```sh
   nat server Monitoring-01 protocol tcp global 218.87.139.50 8001 inside 172.28.0.1 8000 no-reverse
   ```
2. 服务器内网地址启动NAT
   ```sh
   nat-policy
   rule name trust_to_untrust_monitoring    
    source-zone trust
    destination-zone untrust                
    source-address 172.28.0.1 mask 255.255.255.255
    action nat easy-ip
   ```
   1. nat地址组
   ```sh
   nat address-group a1
    mode pat
    section 0 1.1.1.1 1.1.1.1   # 可以是公网不使用的地址
   ``` 
3. 源NAT
   ```sh
   nat-policy
   rule name monitoring
    description 内网转内网
    source-zone trust # 源
    destination-zone trust # 目
    source-address 172.26.0.0 mask 255.255.0.0 # 客户端地址
    destination-address 172.28.0.1 mask 255.255.255.255 # 服务器地址
    action nat address-group a1 # 
   ```
4. 安全策略
   ```sh
   security-policy
   rule name monitoring
    description 内网转内网
    session logging
    source-zone trust                     # 源
    destination-zone trust                # 目
    source-address 172.26.0.0 mask 255.255.0.0     # 客户端地址
    destination-address 172.28.0.1 mask 255.255.255.255 # 服务器地址
    action permit
5. 策略路由
   ```sh
   policy-based-route                        
   rule name monitoring                                
    description 内网转内网禁用策略路由                    
    ingress-interface GigabitEthernet1/0/0     # 源接口地址
    source-address 172.26.0.0 mask 255.255.0.0    # 客户端地址
    destination-address 172.28.0.1 mask 255.255.255.255   # 服务器地址
    action no-pbr    # 不做策略路由
   ```
## 2. VRRP配置详解
```sh
##LSW1
[Huawei]vlan 10
[Huawei]vlan 20
[Huawei]interface Vlanif10
[Huawei-Vlanif10]ip address 192.168.10.10 255.255.255.0
[Huawei-Vlanif10]vrrp vrid 1 virtual-ip 192.168.10.254             # 虚拟网关
[Huawei-Vlanif10]vrrp vrid 1 priority 120                          # 配置优先级，默认100
[Huawei-Vlanif10]vrrp vrid 1 preempt-mode timer delay 0           # 抢占时间0秒，默认0秒
[Huawei-Vlanif10]vrrp vrid 1 track interface GigabitEthernet0/0/1    # 监听上下行口
[Huawei-Vlanif10]vrrp vrid 1 track interface GigabitEthernet0/0/24   # 监听上下行口
[Huawei]interface Vlanif20
[Huawei-Vlanif20]ip address 192.168.20.10 255.255.255.0
[Huawei-Vlanif20]vrrp vrid 2 virtual-ip 192.168.20.254             # 虚拟网关
[Huawei-Vlanif20]vrrp vrid 2 priority 115                          # 配置优先级，需要低于主链路
##配置接LSW3口
[Huawei]interface GigabitEthernet0/0/1
[Huawei-GigabitEthernet0/0/1]port link-type trunk
[Huawei-GigabitEthernet0/0/1]port trunk allow-pass vlan 10 20
##配置接AR3口
[Huawei]interface Vlanif100
[Huawei-Vlanif100]ip address 172.10.0.2 255.255.255.0
[Huawei]interface GigabitEthernet0/0/2
[Huawei-GigabitEthernet0/0/2]port link-type access
[Huawei-GigabitEthernet0/0/2]port default vlan 100
[Huawei]ip route-static 0.0.0.0 0.0.0.0 172.10.0.1
##LSW2
[Huawei]vlan 10
[Huawei]vlan 20
[Huawei]interface Vlanif10
[Huawei-Vlanif20]ip address 192.168.10.20 255.255.255.0
[Huawei-Vlanif20]vrrp vrid 2 virtual-ip 192.168.10.254             # 虚拟网关
[Huawei-Vlanif20]vrrp vrid 2 priority 115                          # 配置优先级，需要低于主链路
[Huawei]interface Vlanif20
[Huawei-Vlanif10]ip address 192.168.20.20 255.255.255.0
[Huawei-Vlanif10]vrrp vrid 1 virtual-ip 192.168.20.254             # 虚拟网关
[Huawei-Vlanif10]vrrp vrid 1 priority 120                          # 配置优先级，默认100
[Huawei-Vlanif10]vrrp vrid 1 preempt-mode timer delay 0           # 抢占时间0秒，默认0秒
[Huawei-Vlanif10]vrrp vrid 1 track interface GigabitEthernet0/0/1    # 监听上下行口
[Huawei-Vlanif10]vrrp vrid 1 track interface GigabitEthernet0/0/24   # 监听上下行口
##配置接LSW3口
[Huawei]interface GigabitEthernet0/0/2
[Huawei-GigabitEthernet0/0/2]port link-type trunk
[Huawei-GigabitEthernet0/0/2]port trunk allow-pass vlan 10 20
##配置接AR3口
[Huawei]interface Vlanif100
[Huawei-Vlanif100]ip address 172.20.0.2 255.255.255.0
[Huawei]interface GigabitEthernet0/0/1
[Huawei-GigabitEthernet0/0/1]port link-type access
[Huawei-GigabitEthernet0/0/1]port default vlan 10
[Huawei]ip route-static 0.0.0.0 0.0.0.0 172.20.0.1
##LSW3
##配置接LSW1口
[Huawei]interface GigabitEthernet0/0/1
[Huawei-GigabitEthernet0/0/1]port link-type trunk
[Huawei-GigabitEthernet0/0/1]port trunk allow-pass vlan 10 20
##配置接LSW2口
[Huawei]interface GigabitEthernet0/0/2
[Huawei-GigabitEthernet0/0/2]port link-type trunk
[Huawei-GigabitEthernet0/0/2]port trunk allow-pass vlan 10 20
##pc接入端
[Huawei]interface Ethernet0/0/1
[Huawei-Ethernet0/0/1]port link-type access
[Huawei-Ethernet0/0/1]port default vlan 10
[Huawei]interface Ethernet0/0/2
[Huawei-Ethernet0/0/2]port link-type access
[Huawei-Ethernet0/0/2]port default vlan 20
##AR1
##vlan10默认通过
[Huawei]interface GigabitEthernet0/0/0
[Huawei-GigabitEthernet0/0/0]ip address 172.10.0.1 24
##vlan20默认通过
[Huawei]interface GigabitEthernet0/0/1
[Huawei-GigabitEthernet0/0/0]ip address 172.20.0.1 24
##配置换回口
[Huawei]interface LoopBack 0
[Huawei-LoopBack0]ip address 1.1.1.1 255.255.255.0
##路由
[Huawei]ip route-static 192.168.10.0 255.255.255.0 172.10.0.2
[Huawei]ip route-static 192.168.10.0 255.255.255.0 172.20.0.2 preference 70
[Huawei]ip route-static 192.168.20.0 255.255.255.0 172.20.0.2
[Huawei]ip route-static 192.168.20.0 255.255.255.0 172.10.0.2 preference 70
```
## 3. 海康存储服务器和华为三层交换机链路捆绑
1. 创建链路
   ```sh
   [Huawei]interface eth-trunk 1  # 创建链路
   [Huawei]interface g0/0/1   # 进入接口
   [Huawei-GigabitEthernet0/0/1]eth-trunk 1   # 加入链路
   [Huawei]int g0/0/2   # 进入接口
   [Huawei-GigabitEthernet0/0/2]eth-trunk 1    # 加入链路
   [Huawei]dis eth-trunk 1    # 查询链路状态及绑定情况
   [Huawei]acp priority 100   # 设置主设备 默认接口优先级32768
   [Huawei]interface eth-trunk 1
   [Huawei-eth-trunk1]max active-linknumber 2  # 设置最大链路数
   [Huawei]dis trunkmembership eth-trunk 1
   ```
2. 链路捆绑:手工链路捆绑（两端配置需一样） 海康ROX模式
   ```sh
   [Huawei]interface Eth-Trunk 1
   [Huawei-Eth-Trunk1]mode manual load-balance # 华为默认手工模式，LACP模式为《mode lacp-static》
   [Huawei-Eth-Trunk1]max bandwidth-affected-linknumber 8 # 最大链路数量，默认8
   [Huawei-Eth-Trunk1]trunkport GigabitEthernet 0/0/1 to 0/0/4 # 把端口G1至G4批量加入eth-trunk 1
   [Huawei-Eth-Trunk1]quit # 退出链路
   [Huawei]display eth-trunk 1 # 查询链路状态
   ```
   > 捆绑完成，所有配置在Eth-Trunk 1完成即可，和原端口配置方式一样。
3. LACP链路捆绑（两端配置需一样） 海康802.3模式
   ```sh
   [Huawei]interface Eth-Trunk 1
   [Huawei-Eth-Trunk1]mode lacp-static # 华为LACP模式为，手工模式为mode manual load-balance
   [Huawei-Eth-Trunk1]max bandwidth-affected-linknumber 8 # 最大链路数量，默认8《最好为2，4，8双数》
   [Huawei-Eth-Trunk1]trunkport GigabitEthernet 0/0/1 to 0/0/4 # 把端口G1至G4批量加入eth-trunk 1
   [Huawei-Eth-Trunk1]quit # 退出链路
   [Huawei]display eth-trunk 1 # 查询链路状态
   ```
   > 捆绑完成，所有配置在Eth-Trunk 1完成即可，和原端口配置方式一样。
## 4. 华为路由器配置NAT方法
1. 静态NAT一对一
   ```sh
   # 218.87.139.50 # 为公网ip   10.10.10.1  # 为需要上网的ip
   [Huawei-GigabitEthernet0/0/1]nat static global 218.87.139.50 inside 10.10.10.1  # 出接口地址绑定
   ```
2. PAT动态NAT一对一
   ```sh
   [Huawei]nat address-group 1 218.87.139.1 218.87.139.50 # 创建地址池
   [Huawei]acl 2021    # 创建id
   [Huawei-acl-basic-2021]rule 5 permit source 10.10.10.0 0.0.0.255  # 允许哪些段或者ip通过上网
   [Huawei-GigabitEthernet0/0/1] nat outbound 2021 address-group 1     # 出接口地址绑定
   ```
3. PAT基于接口NAT一对多
   ```sh
   [Huawei]acl 2021                 # 创建id
   [Huawei-acl-basic-2021]rule 5 permit source 10.10.10.0 0.0.0.255    # 允许哪些段或者ip通过上网
   [Huawei-GigabitEthernet0/0/1]ip address 218.87.139.50 30  # 配置出接口ip外网地址
   [Huawei-GigabitEthernet0/0/1]nat outbound 2021    # 出口地址绑定2021上网段
   ```
4. 静态PAT端口映射
   ```sh
   [Huawei-GigabitEthernet0/0/1]nat server protocol tcp global current-interface 8808 inside 10.10.10.100 23 # 基于接口做端口映射方法1
   [Huawei-GigabitEthernet0/0/1]nat static protocol tcp global current-interface 8808 inside 10.10.10.100 23 # 基于接口做端口映射方法2
   [Huawei-GigabitEthernet0/0/1]nat static protocol tcp global 218.1.1.1 23 inside 10.10.10.100 23 # 基于专门公网ip端口映射
   ```
## 5. TP无线管理AC设置多SSID
> 设备：TL - AC500、华为交换机5720、TL-HDAP1800
1. 配置三层交换机
   * 配置网关、AC接口配置信息,10为ac和ap的vlan。20，30为SSID准备的
   ```sh
   [HUAWEI]vlan 10    # AC和AP
   [HUAWEI]vlan 20   # 客户wifi
   [HUAWEI]vlan 30   # 办公wifi
   [HUAWEI]interface vlanif10
   [HUAWEI-vlanif10]ip address 192.168.1.254 24
   [HUAWEI-vlanif10]quit
   [HUAWEI]interface GigabitEthernet0/0/24    # 对应AC接口
   [HUAWEI-GigabitEthernet0/0/24]port link-type hybrid
   [HUAWEI-GigabitEthernet0/0/24]port hybrid tagged vlan 10 20 30
   # 配置20和30地址池，有dhpc服务器的自己配置。
   #  Vlan20
   [HUAWEI]dhcp enable
   [HUAWEI]ip pool guest   # 客户wifi
   [HUAWEI-ip-pool-guest]gateway-list 192.168.2.254
   [HUAWEI-ip-pool-guest]network 192.168.2.0 mask 24
   [HUAWEI-ip-pool-guest]dns-list 202.101.224.69 202.101.226.68
   [HUAWEI-ip-pool-guest]quit
   [HUAWEI]interface vlanif20
   [HUAWEI-Vlanif20]ip address 192.168.1.254 24
   [HUAWEI-Vlanif20dhcp select global
   #  Vlan30
   [HUAWEI]ip pool office   # 办公wifi
   [HUAWEI-ip-pool-office]gateway-list 192.168.3.254
   [HUAWEI-ip-pool-office]network 192.168.3.0 mask 24
   [HUAWEI-ip-pool-office]dns-list 202.101.224.69 202.101.226.68
   [HUAWEI-ip-pool-office]quit
   [HUAWEI]interface vlanif30
   [HUAWEI-Vlanif30]ip address 192.168.2.254 24
   [HUAWEI-Vlanif30dhcp select global
   ```
2. 配置二层交换机
   * 接口都放行对应的vlan 10 20 30，接口可以设置trunk或者hybrid，自行决定
   ```sh
   [HUAWEI]vlan 10    # AC和AP
   [HUAWEI]vlan 20   # 客户wifi
   [HUAWEI]vlan 30   # 办公wifi
   [HUAWEI]interface Ethernet0/0/1    # 对应AP接口
   [HUAWEI-Ethernet0/0/1]port link-type hybrid
   [HUAWEI-Ethernet0/0/1]port hybrid pvid vlan 10 # 看情况是否需要
   [HUAWEI-Ethernet0/0/1]port hybrid untagged vlan 10
   [HUAWEI-Ethernet0/0/1]port hybrid tagged vlan 20 30
   ```
3. 配置ac
   * 配置接口vlan
     * 网络设置—vlan设置—新增— vlanID（10）—端口（TAG）— 确定
   * 配置DHCP服务，为AP分配ip地址使用。
     * 网络设置—DHCP服务—服务接口（刚设置的vlan接口名称）— 开始地址（192.168.1.1）—结束地址
     * (192.168.1.254)— 确定
   * 设置SSID,即wifi名
     * 无线管理—新增—SSID（guest）—安全选项—PSK密码（wifi密码）—确定
     * 无线管理—新增—SSID（office）—安全选项—PSK密码（wifi密码）—确定
   * 射频绑定
     * 无线管理—SSID（guest）—射频绑定—选中ap —绑定vlan（20）—绑定
     * 无线管理—SSID（office）—射频绑定—选中ap —绑定vlan（30）—绑定
## 6. 深信服AC1000路由模式连接TP-LINK三层交换机
* 外网地址: IPV4:100.100.100.100 掩码:255.255.255.0 网关:100.100.100.254
* AC1000地址 ：172.18.0.1
* 交换机地址：172.18.0.2
* 交换机网段：
  * 部门一：连接交换机1-10端口,对应vlan2,IP网段172.18.8.0/24
  * 部门二：连接交换机11-15端口,对应vlan3,IP网段172.18.9.0/24
  * 监控一：连接交换机16-20端口,对应vlan4,IP网段172.19.8.0/24
  * 监控二：连接交换机21-24端口,对应vlan5,IP网段172.19.9.0/24
1. AC配置
   1. 配置部署模式为路由模式 系统管理—>网络配置—>部署模式—>路由模式
   2. 选择网口列表 增加 LAN网口—>增加WAN网口列表 说明:有几个外网地址就增加几个WAN网口
   3. 配置LAN口 LAN网口配置,我增加的是eth0接口,所以选择eth0 IPV4:172.18.0.1/255.255.255.0
   4. 配置WAN口,且配置好网关和DNS,我增加的是eth2接口 网络地址:根据自己带宽选择,我的是独立IP地址,所以网络地址选择手动配置 IPV4:100.100.100.100/255.255.255.0 默认网关:100.100.100.254 首选DNS:223.5.5.5
   5. 配置DMZ口 DMZ口配置(默认) IPV4:10.252.252.252/255.255.255.0
   6. 配置NAT代理上网,代理内网上网 外网接口:所有WAN口 代理网段(即所有内网地址):172.18.0.0/255.255.0.0
   7. 提交配置,提示重启设置,确定
   8. 由于有多个网段,需要配置回包路由,下一跳地址为三层交换机地址 目的地:172.18.0.0 子网掩码:255.255.0.0 下一跳地址:172.18.0.2 接口设置自动即可
   9. 如果需要配置策略等,根据客户需求配置即可
2. 三层交换机配置
   1. 先修改vlan1地址 路由功能—>接口—>编辑(IP地址:172.18.0.2,子网掩码:255.255.255.0)
   2. 增加VLAN条目
      1. VLAN—>802.1Q VLAN—>VLAN配置
      2. 新建—>VLANID,VLAN名称
      3. 根据上面提供的配置VLAN地址和网段及接口
   3. 创建接口IP
   * 路由功能—>接口—>编辑—>创建
   * 示例:部门一
     * VLAN接口:2
     * IP地址:172.18.8.254
     * 子网掩码:255.255.255.0
     * 其他根据要求自行设置
   4. 开启DHCP地址服务器
     * 全局配置里面启用DHCP服务器,点击提交
   5. 设置DHCP服务器地址池
     * 路由功能服务器—>地址池设置
     * 示例:部门一
       * 名称:部门一
       * 网络号:172.18.8.0
       * 开始地址:172.18.8.1
       * 结束地址:172.18.8.253
       * 网关地址:172.18.8.254
       * DNS:223.5.5.5
       * DNS:223.6.6.6
   6. DICP服务器地址
   * 接口ID:2
   * 服务器地址:172.18.8.254