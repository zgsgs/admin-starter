import { getHanByNumber, transformToTimeCountDown } from '../number'

describe('number.ts', () => {
  it('', async() => {
    expect(getHanByNumber(9)).toMatchInlineSnapshot('"九"')
  })
  it('', async() => {
    expect(transformToTimeCountDown(60)).toMatchInlineSnapshot('"01: 00"')
  })
})
