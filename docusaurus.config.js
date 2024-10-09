// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ticaret İstatistik',
  tagline: "İstatistik —  Güçlü akademik kadrosu ile istatistiğe dair her şey sizi geleceğe hazırlıyor.",
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
  trailingSlash: false,

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

      announcementBar: {
        id: 'support_us',
        content:
          'Bizi Instagram üzerinden takip ederek en güncel ticaret istatistikleri, analizler ve özel içeriklere anında ulaşabilirsiniz. Kaçırmamak için şimdi  <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/ticaretistatistik">takip edin</a>!',
        backgroundColor: '#f5cf06',
        textColor: '#091E42',
        isCloseable: false,
      },

      hideOnScroll: true,

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
            sidebarId: 'hakkimizdaSidebar',
            position: 'left',
            label: 'Hakkımızda',
          },
          {
            type: 'docSidebar',
            sidebarId: 'spssSidebar',
            position: 'left',
            label: 'Jamovi',
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
            href: 'https://ticaret.edu.tr/istatistik/akademik-kadro/',
            label: 'Akademik Kadro',
            position: 'right',
          },
          {
            href: 'https://ticaret.edu.tr/istatistik/wp-content/uploads/sites/30/2022/09/2022-2023_Istatistik_Ders-Icerikleri.pdf',
            label: 'Müfredat',
            position: 'right',
          },
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
                label: 'Python',
                to: '/docs/docs/python/',
              },
              {
                label: 'R',
                to: '/docs/docs/r/',
              },
            ],
          },
          {
            title: "Akademik Bilgiler",
            items: [
              {
                label: 'Bölüm Sayfası',
                href: 'https://ticaret.edu.tr/istatistik/',
              },
              {
                label: 'Akademik Kadro',
                href: 'https://ticaret.edu.tr/istatistik/akademik-kadro/',
              },
              {
                label: 'Ders Programları',
                href: 'https://ticaret.edu.tr/istatistik/ders-programlari/',
              },
            ]
          },
          {
            title: 'Sosyal',
            items: [
              {
                label: 'Blog',
                to: '/docs/blog',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/ticaretistatistik'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ticaretistatistik/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © 2024 Ticaret İstatistik | Built with <a target="_blank" rel="noopener noreferrer" href="https://docusaurus.io/">Docusaurus</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
