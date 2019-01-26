<template>
  <button class="w-button" :class="{'is-loading': computedProcessing}"
          :disabled="disabled"
          @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'WButton',
    props: {
      disabled: Boolean,
      processing: Boolean,
      onclick: {
        type: Function,
        default: null
      }
    },
    data() {
      return {
        scopedProcessing: false
      }
    },
    computed: {
      computedProcessing: $e => $e.processing || $e.scopedProcessing
    },
    methods: {
      async onClick() {
        if (this.disabled || this.computedProcessing) return

        this.scopedProcessing = true
        if (this.onclick) {
          await this.onclick()
        } else {
          this.$emit('click')
        }
        this.scopedProcessing = false
      }
    }
  }
</script>
