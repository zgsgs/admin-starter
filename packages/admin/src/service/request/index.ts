/* 这里必须指到 config 目录 */
import { createRequest } from './request'
import { getServiceEnvConfig } from '~/build/config'

const { url, urlPattern, secondUrl, secondUrlPattern } = getServiceEnvConfig(import.meta.env)

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'Y'

export const request = createRequest({ baseURL: isHttpProxy ? urlPattern : url })

export const secondRequest = createRequest({ baseURL: isHttpProxy ? secondUrlPattern : secondUrl })

export const mockRequest = createRequest({ baseURL: '/mock' })
