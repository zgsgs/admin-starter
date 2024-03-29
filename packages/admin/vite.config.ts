import { defineConfig, loadEnv } from 'vite'
import {
  createViteProxy,
  getRootPath,
  getServiceEnvConfig,
  getSrcPath,
  getTestPath,
  setupVitePlugins,
  viteDefine,
} from './build'

export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as ImportMetaEnv

  const rootPath = getRootPath()
  const srcPath = getSrcPath()

  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === 'Y'
  const envConfig = getServiceEnvConfig(viteEnv)

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
    },
    define: viteDefine,
    plugins: setupVitePlugins(viteEnv),
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./src/styles/scss/global.scss" as *;',
        },
      },
    },
    server: {
      host: '0.0.0.0',
      open: true,
      proxy: createViteProxy(isOpenProxy, envConfig),
    },
    optimizeDeps: {
      include: [
        '@antv/data-set',
        '@antv/g2',
        '@better-scroll/core',
        'echarts',
        'swiper',
        'swiper/vue',
        'vditor',
        'wangeditor',
        'xgplayer',
      ],
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false,
      },
    },
    // https://github.com/vitest-dev/vitest
    test: {
      environment: 'happy-dom', // 或 'js-dom', 'node'
      // 运行在每个测试文件前面
      setupFiles: [getTestPath('./test/setupFiles/index.ts')],
      deps: {
        inline: ['@vue', '@vueuse', 'vue-demi'],
      },
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    },
  }
})
