<template>
  <button class="w-button"
          :class="[cls, computedProcessing ? 'is-loading' : '']"
          :disabled="disabled"
          @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'w-button',
    props: {
      cls: String,
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

<style lang="scss">
  .w-button {
    font-size: $size-5;
    position: relative;
    border-radius: 5px;
    border: 1px solid gainsboro;
    padding: .5em 1em;
    background-color: $white;
    outline: none;
    cursor: pointer;
    transition: background-color .2s, color .15s;
    opacity: .9;

    // Basic
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
    // Outlined
    &.is-outlined {
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
    // Rounded
    &.is-rounded {
      border-radius: 50000000px;
    }
    &[disabled] {
      opacity: .4;
      cursor: not-allowed;

      &:hover,
      &:focus,
      &:active,
      &:hover {
        // Basic
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
        // Outlined
        &.is-outlined {
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
    &:hover {
      // Basic
      &.is-primary {
        $base: darken($primary, 8%);
        background-color: $base;
        border: 1px solid $base;
      }
      &.is-red {
        $base: darken($red, 8%);
        background-color: $base;
        border: 1px solid $base;
      }
      &.is-green {
        $base: darken($green, 8%);
        background-color: $base;
        border: 1px solid $base;
      }
      // Outlined
      &.is-outlined,
      &.is-loading {
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
      }
    }
  }
</style>
