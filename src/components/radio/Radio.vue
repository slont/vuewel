<template>
  <span class="radio" :class="{'is-active': checked}" @click.stop="onClick">
    <input type="radio" :value="value" @click/>
    <span class="radio-border">
      <span class="radio-checked"/>
    </span>
    <label v-if="label" class="radio-label">{{ label }}</label>
    <slot/>
  </span>
</template>

<script>
  export default {
    name: 'WRadio',
    props: {
      value: {},
      wValue: {},
      label: String
    },
    computed: {
      checked: vm => vm.value === vm.wValue
    },
    methods: {
      onClick() {
        this.$emit('input', this.wValue)
      }
    }
  }
</script>
