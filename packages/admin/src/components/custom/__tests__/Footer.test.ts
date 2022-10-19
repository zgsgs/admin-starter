import Footer from '../Footer.vue'
import { i18n } from '@/modules/i18n'

describe('Footer.vue', () => {
  it('render a message', async() => {
    const msg = 'Hello world.'
    const wrapper = mount(Footer, {
      global: {
        plugins: [i18n],
      },
      slots: {
        default: msg,
      },
    })
    expect(wrapper.text()).toContain(msg)
  })
})
