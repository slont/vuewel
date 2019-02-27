<template>
  <span class="switch" @click="onClick" :class="{'has-label': trueLabel || falseLabel}">
    <span class="switch-area" :class="{'is-active': active}" :style="`min-width: ${width};`">
      <span v-if="active ? trueLabel : falseLabel" class="switch-label">
        {{ active ? trueLabel : falseLabel }}
      </span>
      <span class="switch-pin"/>
    </span>
    <slot/>
  </span>
</template>

<script>
  export default {
    name: 'WSwitch',
    props: {
      value: Boolean,
      width: {
        type: String,
        default: '2.875em'
      },
      trueLabel: String,
      falseLabel: String
    },
    data() {
      return {
        active: this.value
      }
    },
    methods: {
      onClick() {
        this.active = !this.active
        this.$emit('input', this.active)
      }
    }
  }
</script>
