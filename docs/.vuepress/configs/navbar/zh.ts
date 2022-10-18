import type { NavbarConfig } from "@vuepress/theme-default";
export const zh:NavbarConfig = [
    {
        text: '系统学习',
        children: [
          {
            text: 'linux',
            link: '/linux/',
            // 该元素将一直处于激活状态
            activeMatch: '^/linux/',
          },
          {
            text: 'windows',
            link: '/windows/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/windows/',
          },
        ],
      },
      {
        text: '前端基础',
        children: [
          {
            text: 'html',
            link: '/html/',
            // 该元素将一直处于激活状态
            activeMatch: '^/html/',
          },
          {
            text: 'css',
            link: '/css/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/css/',
          },
          {
            text: 'Javascript',
            link: '/javascript/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/javascript/',
          },
        ],
      },
      {
        text: '前端框架',
        children: [
          {
            text: 'vue',
            link: '/vue/',
            // 该元素将一直处于激活状态
            activeMatch: '^/vue/',
          },
        ],
      },
      {
        text: '数据库',
        children: [
          {
            text: 'mysql',
            link: '/mysql/',
            // 该元素将一直处于激活状态
            activeMatch: '^/mysql/',
          },
          {
            text: 'mssql',
            link: '/mssql/',
            // 该元素将一直处于激活状态
            activeMatch: '^/mssql/',
          },
        ],
      },
      {
        text: 'Python',
        children: [
          {
            text: 'Python',
            link: '/Python/',
            // 该元素将一直处于激活状态
            activeMatch: '^/Python/',
          },
          {
            text: 'Django',
            link: '/Django/',
            // 该元素将一直处于激活状态
            activeMatch: '^/Django/',
          },
        ],
      },
      {
        text: 'Java',
        children: [
          {
            text: 'Java',
            link: '/Java/',
            // 该元素将一直处于激活状态
            activeMatch: '^/Java/',
          },
          {
            text: 'SpringBoot',
            link: '/SpringBoot/',
            // 该元素将一直处于激活状态
            activeMatch: '^/SpringBoot/',
          },
        ],
      },
      {
        text: 'network',
        children: [
          {
            text: 'huawei',
            link: '/huawei/',
            // 该元素将一直处于激活状态
            activeMatch: '^/huawei/',
          },
        ],
      },
      {
        text: '其他相关',
        children: [
          {
            text: 'git',
            link: '/git/',
            // 该元素将一直处于激活状态
            activeMatch: '^/git/',
          },
          {
            text: 'nginx',
            link: '/nginx/',
            // 该元素将一直处于激活状态
            activeMatch: '^/nginx/',
          },
          {
            text: 'pip',
            link: '/pip/',
            // 该元素将一直处于激活状态
            activeMatch: '^/pip/',
          },
          {
            text: 'uwsgi',
            link: '/uwsgi/',
            // 该元素将一直处于激活状态
            activeMatch: '^/uwsgi/',
          },
          {
            text: 'English',
            link: '/English/',
            // 该元素将一直处于激活状态
            activeMatch: '^/English/',
          },
          {
            text: 'KMS',
            link: '/kms/',
            // 该元素将一直处于激活状态
            activeMatch: '^/kms/',
          },
          {
            text: 'vuepress',
            link: '/vuepress/',
            // 该元素将一直处于激活状态
            activeMatch: '^/vuepress/',
          },
        ],
      },
]