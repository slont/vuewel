<template>
  <button class="w-button" :class="cls" @click="onClick" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'w-button',
    props: {
      cls: String,
      disabled: Boolean,
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
    font-size: $size-5;
    border-radius: 5px;
    border: 1px solid gainsboro;
    padding: .5em 1em;
    background-color: $white;
    outline: none;
    cursor: pointer;
    transition: background-color .2s, color .15s;

    &:hover {
      /*&.is-primary {
        background-color: $white;
        color: $primary;
      }
      &.is-red {
        background-color: $white;
        color: $red;
      }
      &.is-green {
        background-color: $white;
        color: $green;
      }*/
    }
    &.is-primary {
      background-color: $primary;
      color: $white;
      border: 1px solid $primary;
    }
    &.is-red {
      background-color: $red;
      color: $white;
      border: 1px solid $red;
    }
    &.is-green {
      background-color: $green;
      color: $white;
      border: 1px solid $green;
    }
    &.is-outlined {
      &:not(:hover) {
        &.is-primary {
          background-color: $white;
          color: $primary;
        }
        &.is-red {
          background-color: $white;
          color: $red;
        }
        &.is-green {
          background-color: $white;
          color: $green;
        }
      }
    }
  }
</style>
