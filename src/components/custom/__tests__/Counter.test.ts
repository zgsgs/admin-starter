import Counter from '../Counter.vue'

describe('Counter.vue', () => {
  const wrapper = mount(Counter, {
    props: {
      initial: 1,
    },
  })
  const num = wrapper.get('span')

  it('initialized to 1', async() => {
    expect(num.text()).toBe('1')
  })

  it('add 1 when clicked', async() => {
    await wrapper.get('.inc').trigger('click')
    expect(num.text()).toMatchInlineSnapshot('"2"')
    expect(num.text()).toBe('2')
  })

  it('decrement 1 when clicked', async() => {
    await wrapper.get('.dec').trigger('click')
    expect(num.text()).toMatchInlineSnapshot('"1"')
    expect(num.text()).toBe('1')
  })
})
