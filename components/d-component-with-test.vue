<template>
  <div>
    <p ref="count">
      Times clicked: {{ count }}
    </p>
    <c-button ref="increment" @click="increment">
      increment
    </c-button>
  </div>
</template>

<script>
import { CButton } from '@chakra-ui/vue'

export default {
  components: {
    CButton
  },
  data: () => ({
    count: 0
  }),
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>
