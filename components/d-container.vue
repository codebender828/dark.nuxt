<template>
  <c-box v-bind="$attrs" w="100%" mx="auto" max-w="60ch" px="1rem">
    <slot />
  </c-box>
</template>

<script>
export default {
  name: 'DContainer',
  inheritAttrs: false
}
</script>
