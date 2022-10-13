import { mount } from '@vue/test-utils'
import Counter from '../Counter.vue'

describe('Counter.vue', () => {
  it('', async() => {
    const wrapper = mount(Counter, {
      props: {
        initial: 1,
      },
    })
    const num = wrapper.get('span')
    expect(num.text()).toBe('1')
    await wrapper.get('.inc').trigger('click')
    expect(num.text()).toMatchInlineSnapshot('"2"')
    expect(num.text()).toBe('2')
    await wrapper.get('.dec').trigger('click')
    expect(num.text()).toMatchInlineSnapshot('"1"')
    expect(num.text()).toBe('1')
  })
})
