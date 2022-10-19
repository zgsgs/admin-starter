import { addColorAlpha, getAllColorPalette, getColorPalette, isWhiteColor, mixColor } from '@/utils'

describe('path.ts', () => {
  const color = '#007fff'
  const secondColor = '#fff'
  it('根据颜色获取调色板颜色(从左至右颜色从浅到深，6为主色号)', async() => {
    expect(getColorPalette(color, 2)).toMatchInlineSnapshot('"#a3ddff"')
  })
  it('根据颜色获取调色板颜色所有颜色', async() => {
    expect(getAllColorPalette(color)).toMatchInlineSnapshot(`
      [
        "#e6f7ff",
        "#a3ddff",
        "#7acaff",
        "#52b4ff",
        "#299bff",
        "#007fff",
        "#0065d9",
        "#004db3",
        "#00388c",
        "#002566",
      ]
      `)
  })
  it('给颜色加透明度', async() => {
    expect(addColorAlpha(color, 0.8)).toMatchInlineSnapshot('"#007fffcc"')
  })
  it('颜色混合', async() => {
    expect(mixColor(color, secondColor, 0.3)).toMatchInlineSnapshot('"#7ea3ff"')
  })
  it('颜色混合', async() => {
    expect(isWhiteColor(color)).toMatchInlineSnapshot('false')
  })
})
