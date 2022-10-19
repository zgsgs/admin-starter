import { VitePWA } from 'vite-plugin-pwa'

// https://github.com/antfu/vite-plugin-pwa
export default VitePWA({
  registerType: 'autoUpdate',
  includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
  manifest: {
    name: 'Vitesse',
    short_name: 'Vitesse',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
})
