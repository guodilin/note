import {defineUserConfig} from "vuepress";
import {defaultTheme} from "@vuepress/theme-default";
import {path} from "@vuepress/utils";
import {navbar, sidebar} from "./configs";

export default defineUserConfig({
    base:`/${"note"}/`,
    // 站点配置
    locales: {
        "/": {
            lang: "",
            title: "小郭同学 - 学习笔记",
            description: "Welcome to my site",
        },
    },
    //侧边栏需要提取的子标题层级
    markdown: {
        headers: {
            level: [1, 2, 5],
        },
        importCode: {
            handleImportPath: (str) =>
                str.replace(
                    /^@vuepress/,
                    path.resolve(__dirname, "../../packages/@vuepress"),
                ),
        },
    },

    // 主题和它的配置
    theme: defaultTheme({
        // logo: 'https://vuejs.org/images/logo.png',
        locales: {
            "/": {
                navbar: navbar.zh,
                sidebar: sidebar.zh,
                editLinkText: "在GitHub上编辑此页",
                lastUpdatedText: "上次更新",
                contributorsText: "贡献者",
                tip: "提示",
                warning: "注意",
                danger: "警告",
                notFound: ["这什么都没有", "这是一个404页面"],
                backToHome: "返回首页",
                openInNewWindow: "在新窗口打开",
                // toggleDarkMode: "切换夜间模式",
                toggleSidebar: "切换侧边栏",
            },
        },
    }),
});
