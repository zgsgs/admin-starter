import dayjs from 'dayjs'
import type { ConfigEnv } from 'vite'

interface Define {
  PROJECT_BUILD_TIME: string
  'import.meta.vitest'?: string
}

/** 项目构建时间 */
const PROJECT_BUILD_TIME = JSON.stringify(dayjs().format('YYYY-MM-DD HH:mm:ss'))

export const viteDefine = (configEnv: ConfigEnv) => {
  const define: Define = {
    PROJECT_BUILD_TIME,
  }
  if (configEnv.command === 'build')
    // https://cn.vitest.dev/guide/in-source.html
    // 在生产环境的构建中,让打包器清除无用的源码内联测试代码
    define['import.meta.vitest'] = 'undefined'

  return define
}
