import Counter from '../Counter.vue'

describe('Counter.vue', () => {
  it('initialized to 1', async() => {
    const wrapper = mount(Counter, {
      props: {
        initial: 1,
      },
    })
    const num = wrapper.get('span')
    expect(num.text()).toMatchInlineSnapshot('"1"')
    expect(num.text()).toBe('1')
  })

  it('add 1 when clicked', async() => {
    const wrapper = mount(Counter, {
      props: {
        initial: 1,
      },
    })
    const num = wrapper.get('span')
    await wrapper.get('.inc').trigger('click')
    expect(num.text()).toMatchInlineSnapshot('"2"')
    expect(num.text()).toBe('2')
  })

  it('decrement 1 when clicked', async() => {
    const wrapper = mount(Counter, {
      props: {
        initial: 1,
      },
    })
    const num = wrapper.get('span')
    await wrapper.get('.dec').trigger('click')
    expect(num.text()).toMatchInlineSnapshot('"0"')
    expect(num.text()).toBe('0')
  })
})
