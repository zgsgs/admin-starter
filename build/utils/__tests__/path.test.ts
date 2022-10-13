import { getRootPath, getSrcPath, getTestPath } from '../path'

describe('path.ts', () => {
  it('get the root directory path', async() => {
    expect(getRootPath()).toMatchInlineSnapshot('"E:\\\\Home\\\\admin-starter"')
  })

  it('get the `src` directory path', async() => {
    expect(getSrcPath()).toMatchInlineSnapshot('"E:\\\\Home\\\\admin-starter/src"')
  })

  it('get the `test` directory path', async() => {
    expect(getTestPath()).toMatchInlineSnapshot('"E:\\\\Home\\\\admin-starter/test"')
  })
})
