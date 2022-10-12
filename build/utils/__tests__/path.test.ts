import { getRootPath, getSrcPath, getTestPath } from '../path'

describe('path.ts', () => {
  it('测试获取根路径', async() => {
    expect(getRootPath()).toMatchInlineSnapshot('"E:\\\\Home\\\\admin-starter"')
  })

  it('测试获取src路径', async() => {
    expect(getSrcPath()).toMatchInlineSnapshot('"E:\\\\Home\\\\admin-starter/src"')
  })

  it('测试获取src路径', async() => {
    expect(getTestPath()).toMatchInlineSnapshot('"E:\\\\Home\\\\admin-starter/test"')
  })
})
