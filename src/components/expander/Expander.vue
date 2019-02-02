<template>
  <div class="w-expander" :style="{maxHeight: opened ? 'none' : `${height}px`, paddingBottom}">
    <p v-html="displayedContent" v-if="content"/>
    <slot v-else/>
    <div class="mask" v-if="hasMask && !opened"/>
    <div class="foot">
      <w-button :class="btnClass" @click="toggle" v-if="isOverCount && openText && closeText">
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
      },
      maxCount: {
        type: Number,
        default: -1
      },
      content: String,
      hasMask: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        opened: false
      }
    },
    computed: {
      displayedContent() {
        return this.isOverCount && this.opened ? this.content : this.content.substr(0, this.maxCount)
      },
      isOverCount() {
        return !this.content || this.maxCount < this.content.length
      },
      paddingBottom() {
        return this.content
            ? this.isOverCount ? '3rem' : '0'
            : '4rem'
      }
    },
    methods: {
      toggle() {
        this.opened = !this.opened
      }
    }
  }
</script>
