import type {SidebarConfig} from "@vuepress/theme-default";

export const zh: SidebarConfig = {
    '/html/': [
        {
            text: 'html',
            children: ['/html/README.md'],
        },
    ],
    '/linux/': [
        {
            text: 'Linux学习',
            children: [
                '/linux/README.md', '/linux/linux-1.md', '/linux/linux-2.md', '/linux/linux.md'],
        },
    ],
    '/windows/': [
        {
            text: 'windows学习',
            children: [
                '/windows/README.md', '/windows/windows-1.md'],
        },
    ],
    '/mysql/': [
        {
            text: 'mysql学习',
            children: ['/mysql/README.md', '/mysql/mysql-1.md', '/mysql/mysql-2.md', '/mysql/mysql-3.md', '/mysql/mysql-4.md', '/mysql/mysql-5.md'],
        },
    ],
    '/git/': [
        {
            text: 'git学习',
            children: ['/git/README.md', '/git/git-1.md'],
        },
    ],
    '/English/': [
        {
            text: '单词',
            children: ['/English/README.md', '/English/english-1.md'],
        },
    ],
    '/kms/': [
        {
            text: 'KMS',
            children: ['/kms/README.md', '/kms/windows.md', '/kms/office.md'],
        },
    ],
    '/nginx/': [
        {
            text: 'nginx',
            children: ['/nginx/README.md'],
        },
    ],
    '/pip/': [
        {
            text: 'pip',
            children: ['/pip/README.md'],
        },
    ],
    '/uwsgi/': [
        {
            text: 'uwsgi',
            children: ['/uwsgi/README.md'],
        },
    ],
    '/vuepress/': [
        {
            text: 'vuepress',
            children: ['/vuepress/README.md'],
        },
    ],
    '/huawei/': [
        {
            text: '华为网络工程',
            children: ['/huawei/README.md', '/huawei/huawei-1.md'],
        },
    ],
    '/javascript/': [
        {
            text: 'JavaScript语言',
            children: ['/javascript/README.md', '/javascript/javascript-1.md'],
        },
    ],
    '/Python/': [
        {
            text: 'Python',
            children: ['/Python/README.md', '/Python/Python-1.md','/Python/Python-2.md','/Python/Python-3.md','/Python/Python-4.md','/Python/Python-5.md'],
        },
    ],
    '/Django/': [
        {
            text: 'Django',
            children: ['/Django/README.md', '/Django/Django-1.md','/Django/django-2.md','/Django/django-3.md','/Django/django-4.md','/Django/django-5.md'],
        },
    ],
    '/SpringBoot/': [
        {
            text: 'Java SpringBoot',
            children: ['/SpringBoot/README.md', '/SpringBoot/Django-1.md','/SpringBoot/django-2.md','/SpringBoot/django-3.md','/SpringBoot/django-4.md','/SpringBoot/django-5.md'],
        },
    ],
    '/Java/': [
        {
            text: 'Java',
            children: ['/Java/README.md', '/Java/Java-1.md','/Java/Java-2.md','/Java/Java-3.md','/Java/Java-4.md','/Java/Java-5.md'],
        },
    ],
}