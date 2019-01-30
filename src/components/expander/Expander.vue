<template>
  <div class="w-expander" :style="{maxHeight: opened ? 'none' : `${height}px`}">
    <slot/>
    <div class="mask" v-if="!opened"/>
    <div class="foot">
      <w-button :class="btnClass" @click="toggle" v-if="openText && closeText">
        {{ opened ? closeText : openText }}
      </w-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WExpander',
    props: {
      height: {
        type: Number,
        default: 198
      },
      openText: String,
      closeText: String,
      btnClass: {
        type: String,
        default: 'is-link'
      }
    },
    data() {
      return {
        opened: false
      }
    },
    methods: {
      toggle() {
        this.opened = !this.opened
      }
    }
  }
</script>
