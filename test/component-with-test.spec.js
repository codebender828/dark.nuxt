import Component from '@/components/d-component-with-test.vue'
import { render } from '@/test/utils'

test('button increments value on click', async () => {
  const wrapper = render(Component)

  const count = wrapper.findComponent({ ref: 'count' })
  const button = wrapper.findComponent({ ref: 'increment' })

  expect(count.text()).toEqual('Times clicked: 0')

  await button.trigger('click')
  await button.trigger('click')

  expect(count.text()).toEqual('Times clicked: 2')
})
