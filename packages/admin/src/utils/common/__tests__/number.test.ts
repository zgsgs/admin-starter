import { getHanByNumber, transformToTimeCountDown } from '@/utils'

describe('number.ts', () => {
  it('get chinese number', async() => {
    expect(getHanByNumber(9)).toMatchInlineSnapshot('"九"')
  })
  it('convert the total seconds to', async() => {
    expect(transformToTimeCountDown(60)).toMatchInlineSnapshot('"01: 00"')
  })
})
