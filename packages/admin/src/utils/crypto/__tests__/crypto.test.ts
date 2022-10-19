import { decrypto, encrypto } from '@/utils'

describe('crypto.ts', () => {
  const text = 'The moon is so beautiful tonight.'
  const cipherText = 'U2FsdGVkX199uM3nGoISom7elIdRH1ARpBzrfn4yvNMot9hVVEfj4SvzqUb1WnD/pFhChhSctRSp2AM2BhgMAQ=='
  it('encrypto text', async() => {
    expect(encrypto(text).length).toEqual(cipherText.length)
  })

  it('decrypto text', async() => {
    expect(decrypto(cipherText)).toBe(text)
  })
})
