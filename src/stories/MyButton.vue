<template>
  <button class="button-styles" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button',

    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss">
  .button-styles {
    border: 1px solid #eee;
    border-radius: 3px;
    background-color: $primary;
    cursor: pointer;
    font-size: 15pt;
    padding: 3px 10px;
    margin: 10px;
  }
</style>
