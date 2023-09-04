// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '数字花园',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://blog.jerry21.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/iTomstudio/docusaurus-starter/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/iTomstudio/docusaurus-starter/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // https://analytics.google.com/analytics/web/
        gtag: {
          trackingID: 'G-G1GCNRCP1T',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "other",
        path: "other",
        routeBasePath: "other",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `⭐️ 加油！ 今天又是带劲的一天 ⭐ `,
        // isCloseable: false, // 是否可关闭
      },
      sitemap: {
        changefreq: 'weekly',
        priority: 0.5,
        // ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
      },
      algolia:{
        appId: 'EQ3XVT2R1P',
        apiKey: 'fe337886ed8f8eddb3a507248916aa84',
        indexName: 'docusaurus-2',
        contextualSearch: true,
      },
      sidebar: {
        autoCollapseCategories: true,
      },
      navbar: {
        hideOnScroll: true,
        title: 'Jerry',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '沧海拾珍',
          },
          {to: '/blog', label: '流水账', position: 'left'},
          {to: '/about', label: '关于', position: 'left'},
          {to: '/test', label: 'test', position: 'left'},
          {to: '/test2', label: 'test2', position: 'left'},
          {
            label: '其他', 
            position: 'right',
            items:[
              {
                label: "chatGPT",
                to: "/other/chat",
              },
              {
                label: "投喂",
                to: "/other/donate",
              },
            ]
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/iTomstudio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Meta 开源图标',
          src: '/img/buildwith.png',
          href: 'https://www.docusaurus.cn/',
          width: 160,
          height: 51,
        },
        links: [
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()}, Built with <a href="https://www.docusaurus.cn/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.<br>Powered by <a href="/resume">Jerry.</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
