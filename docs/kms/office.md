# Office激活步骤

::: warning
- VOL 版本,需要管理员命令执行，win键 -> cmd -> 以管理员身份运行
- KMS 激活有 180 天期限，此期限称为激活有效间隔
- 若要保持激活状态，您的系统必须通过至少每 180 天连接一次 KMS 服务器来续订激活
- 默认情况下，系统每 7 天自动进行一次激活续订尝试
- 在续订客户端激活之后，激活有效间隔重新开始
- 综上所述，只要您不超过 180 天以上无法连接互联网，系统会自行续期保持激活状态
:::

1. 进入安装目录 `cd "C:\Program Files (x86)\Microsoft Office\Office16"`
    - 32 位默认一般为 `C:\Program Files (x86)\Microsoft Office\Office16`
    - 64 位默认一般为 `C:\Program Files\Microsoft Office\Office16`
    - **Office16** 是 **Office 2016**
    - **Office15** 是 **Office 2013**
    - **Office14** 是 **Office 2010**
    - 打开以上所说的目录，应该有个 `OSPP.VBS` 文件
2. 注册 KMS 服务 `cscript ospp.vbs /sethst:skms.netnr.eu.org`
3. `cscript ospp.vbs /inpkey:GVLK`
4. 激活 Office `cscript ospp.vbs /act`

> 大多数可以不需要填写秘钥，输入1-3步就可以激活

##### Office (LTSC 2021)

Product | GVLK
--- | ---
Office LTSC Professional Plus 2021 | FXYTK-NJJ8C-GB6DW-3DYQT-6F7TH
Office LTSC Standard 2021 | KDX7X-BNVR8-TXXGX-4Q7Y8-78VT3
Project Professional 2021 | FTNWT-C6WBT-8HMGF-K9PRX-QV9H8
Project Standard 2021 | J2JDC-NJCYY-9RGQ4-YXWMH-T3D4T
Visio LTSC Professional 2021 | KNH8D-FGHT4-T8RK3-CTDYJ-K2HT4
Visio LTSC Standard 2021 | MJVNY-BYWPY-CWV6J-2RKRT-4M8QG
Access LTSC 2021 | WM8YG-YNGDD-4JHDC-PG3F4-FC4T4
Excel LTSC 2021 | NWG3X-87C9K-TC7YY-BC2G7-G6RVC
Outlook LTSC 2021 | C9FM6-3N72F-HFJXB-TM3V9-T86R9
PowerPoint LTSC 2021 | TY7XF-NFRBR-KJ44C-G83KF-GX27K
Publisher LTSC 2021 | 2MW9D-N4BXM-9VBPG-Q7W6M-KFBGQ
Skype for Business LTSC 2021 | HWCXN-K3WBT-WJBKY-R8BD9-XK29P
Word LTSC 2021 | TN8H9-M34D3-Y64V9-TR72V-X79KV

##### Office 2019

Product | GVLK
--- | ---
Office Professional Plus 2019 | NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP
Office Standard 2019 | 6NWWJ-YQWMR-QKGCB-6TMB3-9D9HK
Project Professional 2019 | B4NPR-3FKK7-T2MBV-FRQ4W-PKD2B
Project Standard 2019 | C4F7P-NCP8C-6CQPT-MQHV9-JXD2M
Visio Professional 2019 | 9BGNQ-K37YR-RQHF2-38RQ3-7VCBB
Visio Standard 2019 | 7TQNQ-K3YQQ-3PFH7-CCPPM-X4VQ2
Access 2019 | 9N9PT-27V4Y-VJ2PD-YXFMF-YTFQT
Excel 2019 | TMJWT-YYNMB-3BKTF-644FC-RVXBD
Outlook 2019 | 7HD7K-N4PVK-BHBCQ-YWQRW-XW4VK
PowerPoint 2019 | RRNCX-C64HY-W2MM7-MCH9G-TJHMQ
Publisher 2019 | G2KWX-3NW6P-PY93R-JXK2T-C9Y9V
Skype for Business 2019 | NCJ33-JHBBY-HTK98-MYCV8-HMKHJ
Word 2019 | PBX3G-NWMT6-Q7XBW-PYJGG-WXD33

##### Office 2016

Product | GVLK
--- | ---

##### Office 2013

Product | GVLK
--- | ---

##### Office 2010

Product | GVLK
--- | ---

> 微软: [https://docs.microsoft.com/en-us/DeployOffice/vlactivation/gvlks](https://docs.microsoft.com/en-us/DeployOffice/vlactivation/gvlks)

##### Help
- <https://03k.org/kms.html>
- <http://kms.cangshui.net>
