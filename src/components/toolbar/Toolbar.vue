<template>
  <div class="toolbar" :class="{'is-foot': foot, 'has-shadow': shadow}" :style="rootStyle">
    <div class="toolbar-wrapper" :style="{maxWidth: `${width}px`}" v-if="1 === scopedRow">
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
        top: vm.foot ? 'initial' : `-${Math.min(vm.scrolled, vm.scrollTop)}px`,
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
    },
    created() {
      this.scrolled = Math.min(this.scrollableHeight, this.scrollTop)
    },
    methods: {
      async open(unit = 3) {
        if (this.scrolled <= 0) return

        await new Promise(r => setTimeout(r, 0))

        this.scrolled -= unit
        this.open(unit)
      },
      async close(unit = 3) {
        if (this.scrollableHeight <= this.scrolled) return

        await new Promise(r => setTimeout(r, 0))

        this.scrolled = Math.min(this.scrolled + unit, this.scrollableHeight)
        this.close(unit)
      }
    }
  }
</script>
