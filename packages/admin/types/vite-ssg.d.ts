import type { ViteSSGContext } from 'vite-ssg'

declare global {
  type UserModule = (ctx: ViteSSGContext) => void
}
