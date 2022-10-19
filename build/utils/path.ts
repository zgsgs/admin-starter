import path from 'path'
import { serviceEnv } from '../../src/config/service'

/**
 * 获取项目根路径
 * @descrition 末尾不带斜杠
 */
export function getRootPath() {
  return path.resolve(process.cwd())
}

/**
 * 获取项目src路径
 * @param srcName - src目录名称(默认: "src")
 * @descrition 末尾不带斜杠
 */
export function getSrcPath(srcName = 'src') {
  const rootPath = getRootPath()

  return `${rootPath}/${srcName}`
}

/**
 * 获取项目test路径
 * @param testName - test目录名称(默认: "test")
 * @descrition 末尾不带斜杠
 */
export function getTestPath(testName = 'test') {
  const rootPath = getRootPath()

  return `${rootPath}/${testName}`
}

/**
 * 获取当前环境模式下的请求服务的配置
 * @param env 环境
 */
export function getServiceEnvConfig(env: ImportMetaEnv) {
  const { VITE_SERVICE_ENV = 'dev' } = env

  const config = serviceEnv[VITE_SERVICE_ENV]

  return config
}
