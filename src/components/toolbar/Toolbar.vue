<template>
  <div class="w-toolbar">
    <div class="w-toolbar-wrapper" :style="{maxWidth: `${width}px`}">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WToolbar',
    props: {
      width: {
        type: String,
        default: '1080'
      }
    }
  }
</script>

<style lang="scss">
  .w-toolbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    box-shadow: 0 2px 3px rgba(black, .1), 0 0 0 1px rgba(black, .1);

    .w-toolbar-wrapper {
      display: flex;
      height: 100%;
      margin: auto;

      > * {
        display: flex;
        align-items: center;
      }
      > :first-child {
        flex-basis: 20%;
        padding-left: .5rem;
      }
      > :last-child {
        flex-basis: 20%;
        padding: .5rem;
        justify-content: flex-end;
      }
      > :first-child + :not(:last-child) {
        flex: 1;
        padding: .5rem;
        justify-content: center;
      }
    }
  }
</style>
