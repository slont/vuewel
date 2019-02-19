<template>
  <span class="icon" :style="{color: color || ''}">
    <i :class="cls" v-if="icon"/>
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
        vm.icon ? vm.icon : '',
        vm.size ? `fa-${vm.size}` : '',
        vm.fw ? `fa-fw` : ''
      ]
    }
  }
</script>
