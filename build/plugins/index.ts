import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unocss from '@unocss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import windiCSS from 'vite-plugin-windicss'
import html from './html'
import unplugin from './unplugin'
import vueI18n from './vue-i18n'
import markdown from './markdown'
import mock from './mock'
import visualizer from './visualizer'
import compress from './compress'

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
  const plugins = [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    vueJsx(),
    VitePWA(),
    html(viteEnv),
    ...unplugin(viteEnv),
    unocss(),
    pages({
      extensions: ['vue', 'md'],
    }),
    layouts(),
    windiCSS(),
    vueI18n,
    markdown,
    mock,
  ]

  if (viteEnv.VITE_VISUALIZER === 'Y')
    plugins.push(visualizer as PluginOption)

  if (viteEnv.VITE_COMPRESS === 'Y')
    plugins.push(compress(viteEnv))

  return plugins
}
