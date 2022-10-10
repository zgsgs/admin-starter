import VueMacros from 'unplugin-vue-macros/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'
import { getSrcPath } from '../utils'

export default function unplugin(viteEnv: ImportMetaEnv) {
  const { VITE_ICON_PREFFIX, VITE_ICON_LOCAL_PREFFIX } = viteEnv

  const srcPath = getSrcPath()
  const localIconPath = `${srcPath}/assets/svg-icon`

  /** 本地svg图标集合名称 */
  const collectionName = VITE_ICON_LOCAL_PREFFIX.replace(`${VITE_ICON_PREFFIX}-`, '')

  return [
    VueMacros(),
    Icons({
      compiler: 'vue3',
      customCollections: {
        [collectionName]: FileSystemIconLoader(localIconPath),
      },
      scale: 1,
      defaultClass: 'inline-block',
    }),
    Components({
      dts: 'types/components.d.ts',
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
      resolvers: [
        NaiveUiResolver(),
        IconsResolver({ customCollections: [collectionName], componentPrefix: VITE_ICON_PREFFIX }),
      ],
    }),
    createSvgIconsPlugin({
      iconDirs: [localIconPath],
      symbolId: `${VITE_ICON_LOCAL_PREFFIX}-[dir]-[name]`,
      inject: 'body-last',
      customDomId: '__SVG_ICON_LOCAL__',
    }),
    AutoImport({
      imports: [
        'vue-demi',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'types/auto-imports.d.ts',
    }),
  ]
}
