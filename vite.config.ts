import { defineConfig, loadEnv } from 'vite'
import generateSitemap from 'vite-ssg-sitemap'
import { createViteProxy, resolvePath, setupVitePlugins, viteDefine } from './build'

export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv
  const vitePath = resolvePath('./', import.meta.url)

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': vitePath.root,
        '@': vitePath.src,
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
    },
    define: viteDefine(configEnv),
    plugins: setupVitePlugins(configEnv, vitePath.src, viteEnv),
    server: {
      host: '0.0.0.0',
      port: 3200,
      open: true,
      proxy: createViteProxy(viteEnv),
    },
    build: {
      brotliSize: false,
    },

    // https://github.com/antfu/vite-ssg
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
      onFinished() { generateSitemap() },
    },

    // https://github.com/vitest-dev/vitest
    test: {
      include: ['test/**/*.test.ts'],
      includeSource: ['src/**/*.{js,ts}'],
      environment: 'jsdom', // 或 'happy-dom', 'node'
      deps: {
        inline: ['@vue', '@vueuse', 'vue-demi'],
      },
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    },
  }
})
