<template>
  <span class="w-icon">
    <i :class="cls" v-if="icon"></i>
    <slot v-else/>
  </span>
</template>

<script>
  export default {
    name: 'WIcon',
    props: {
      icon: String,
      size: String,
      fw: Boolean
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
