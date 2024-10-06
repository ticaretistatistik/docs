// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ticaret İstatistik',
  tagline: 'İstanbul Ticaret Üniversitesi İstatistik bölümü öğrencileri için hazırlanan yardımcı döküman sitesi.',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://ticaretistatistik.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ticaretistatistik', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ticaretistatistik/docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ticaretistatistik/docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpeg',
      navbar: {
        title: 'Ticaret İstatistik',
        logo: {
          alt: 'Ticaret İstatistik Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'spssSidebar',
            position: 'left',
            label: 'IBM SPSS',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pythonSidebar',
            position: 'left',
            label: 'Python',
          },
          {
            type: 'docSidebar',
            sidebarId: 'rSidebar',
            position: 'left',
            label: 'R',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ticaretistatistik/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dökümanlar',
            items: [
              {
                label: 'IBM SPSS',
                to: '/docs/spss/',
              },
              {
                label: 'Python',
                to: '/docs/python/',
              },
              {
                label: 'R',
                to: '/docs/r/',
              },
            ],
          },
          {
            title: 'Sosyal Medya',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/ticaretistatistik'
              }
            ],
          },
          {
            title: 'Daha fazlası',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ticaretistatistik/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ticaret İstatistik | Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
