<template>
  <span class="icon">
    <i :class="cls" v-if="icon" :style="{color: color ? color : 'currentColor'}"></i>
    <slot :style="{color: color ? color : 'currentColor'}" v-else/>
  </span>
</template>

<script>
  export default {
    name: 'WIcon',
    props: {
      icon: String,
      size: String,
      fw: Boolean,
      color: String
    },
    computed: {
      cls: vm => [
        vm.icon,
        vm.size ? `fa-${vm.size}` : '',
        vm.fw ? `fa-fw` : ''
      ]
    }
  }
</script>
