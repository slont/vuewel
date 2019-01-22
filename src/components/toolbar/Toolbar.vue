<template>
  <div class="w-toolbar" :class="{'is-foot': foot, 'has-shadow': shadow}" :style="rootStyle">
    <div class="w-toolbar-wrapper" :style="{maxWidth: `${width}px`}" v-if="1 === scopedRow">
      <slot/>
    </div>
    <slot v-else/>
  </div>
</template>

<script>
  export default {
    name: 'WToolbar',
    props: {
      row: {
        type: Number | String,
        default: '1'
      },
      scrollTop: {
        type: Number,
        default: 0
      },
      width: {
        type: String,
        default: '1080'
      },
      height: {
        type: String,
        default: '48'
      },
      foot: Boolean,
      shadow: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        scrolled: 0
      }
    },
    computed: {
      scopedRow: vm => Number(vm.row),
      scrollableHeight: vm => vm.height * (vm.scopedRow - 1),
      rootStyle: vm => ({
        top: `-${Math.min(vm.scrolled, vm.scrollTop)}px`,
        height: `${vm.height * vm.scopedRow}px`
      })
    },
    watch: {
      scrollTop(newValue, oldValue) {
        if (newValue < oldValue) {
          this.scrolled = Math.max(0, this.scrolled + newValue - oldValue)
        } else {
          this.scrolled = Math.min(this.scrollableHeight, this.scrolled + newValue - oldValue)
        }
      }
    }
  }
</script>

<style lang="scss">
  .w-toolbar {
    position: fixed;
    left: 0;
    right: 0;
    background-color: $toolbar-bg-color;
    z-index: 99;

    &.is-foot {
      top: initial;
      bottom: 0;
    }
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
    &.has-shadow {
      box-shadow: 0 2px 3px rgba(black, .1), 0 0 0 1px rgba(black, .1);
    }
  }
</style>
