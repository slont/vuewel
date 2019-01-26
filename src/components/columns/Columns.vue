<template>
  <div class="w-columns" :style="{flexWrap: multi ? 'wrap' : 'nowrap'}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'WColumns',
    props: {
      multi: Boolean
    }
  }
</script>
