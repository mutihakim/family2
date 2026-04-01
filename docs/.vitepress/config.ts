import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Cabinet Project Docs',
  description: 'Developer-facing documentation for the Cabinet SaaS boilerplate project.',
  base: '/',
  lastUpdated: true,
  cleanUrls: false,
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Overview', link: '/00-overview' },
      { text: 'API', link: '/04-api-reference' },
      { text: 'Testing', link: '/06-testing-quality' },
    ],
    sidebar: [
      {
        text: 'Core',
        items: [
          { text: '00. Overview', link: '/00-overview' },
          { text: '01. Quickstart', link: '/01-quickstart' },
          { text: '02. Architecture', link: '/02-architecture' },
        ],
      },
      {
        text: 'Guides & Features',
        items: [
          { text: 'RBAC', link: '/guide/rbac' },
          { text: 'i18n', link: '/guide/i18n' },
          { text: 'Subscription', link: '/guide/subscription' },
          { text: 'WhatsApp Integration', link: '/guide/whatsapp' },
          { text: 'Tenant Settings', link: '/03-features/tenant-settings' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: '04. API Reference', link: '/04-api-reference' },
          { text: '05. UI Walkthrough', link: '/05-ui-walkthrough' },
          { text: '06. Testing & Quality', link: '/06-testing-quality' },
          { text: '07. Extension Guide', link: '/07-extension-guide' },
          { text: '09. Installation Guide', link: '/09-installation-guide' },
        ],
      },
    ],
  },
});
