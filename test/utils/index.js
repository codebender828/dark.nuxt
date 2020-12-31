import * as vtl from '@vue/test-utils'
import { defaultTheme, internalIcons } from '@chakra-ui/vue'

/**
 * Chakra UI render defaults for @vue/test-utils
 */
const defaults = {
  provide: () => ({
    $chakraTheme: () => defaultTheme,
    $chakraColorMode: () => 'light',
    $chakraIcons: internalIcons
  })
}

/**
 * Wrapper function to render your application components with VTU
 * @param {import('vue').Component} component
 * @param {import('@vue/test-utils').MountOptions} rest
 */
const render = (component, ...rest) =>
  vtl.mount({ ...defaults, ...component }, ...rest)

export * from '@vue/test-utils'
export {
  render
}
