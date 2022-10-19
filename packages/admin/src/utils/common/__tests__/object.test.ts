import { objectAssign } from '@/utils'

describe('object.ts', () => {
  it('sets object data', async() => {
    const target = {}
    const source = { a: 123, b: 3253 }
    objectAssign(target, source)
    expect(target).toEqual(source)
    expect(target).toMatchInlineSnapshot(`
      {
        "a": 123,
        "b": 3253,
      }
    `)
  })
})
