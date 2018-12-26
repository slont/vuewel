<template>
  <button class="w-button" @click="onClick">
    <span>Hello Test {{msg}}</span>
  </button>
</template>

<script>
  export default {
    name: 'w-button',
    props: {
      msg: {
        type: String,
        required: true
      },
      onclick: {
        type: Function,
        default: null
      }
    },
    data() {
      return {
        processing: false
      }
    },
    methods: {
      async onClick() {
        if (this.processing) return

        this.processing = true
        if (this.onclick) {
          await this.onclick()
        }
        this.processing = false
      }
    }
  }
</script>

<style lang="scss">
  .w-button {
    color: blue;

    span {
      color: red;
    }
  }
</style>
