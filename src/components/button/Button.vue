<template>
  <button class="button"
          :class="{'is-outlined': outlined, 'is-rounded': rounded, 'is-inverted': inverted, 'is-gradient': gradient, 'is-text': text, 'is-loading': computedProcessing}"
          :disabled="disabled"
          @click.stop="onClick">
    <span class="ripple" :style="stylesRipple"/>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'WButton',
    props: {
      outlined: Boolean,
      rounded: Boolean,
      inverted: Boolean,
      gradient: Boolean,
      text: Boolean,
      disabled: Boolean,
      processing: Boolean,
      onclick: {
        type: Function,
        default: null
      }
    },
    data() {
      return {
        scopedProcessing: false,
        indexRipple: 0,
        topRipple: 0,
        leftRipple: 0,
        heightRipple: 0,
        widthRipple: 0,
        opacityRipple: .9,
        timeRipple: 700,
        timeOpacityRipple: 1200
      }
    },
    computed: {
      computedProcessing: $e => $e.processing || $e.scopedProcessing,
      stylesRipple() {
        return {
          opacity: this.opacityRipple,
          top: `${this.topRipple}px`,
          left: `${this.leftRipple}px`,
          height: `${this.heightRipple}px`,
          width: `${this.widthRipple}px`,
          transition: `width ${this.timeRipple}ms ease, height ${this.timeRipple}ms ease, opacity ${this.timeOpacityRipple}ms ease`
        }
      }
    },
    methods: {
      async onClick($e) {
        if (this.disabled || this.computedProcessing) return

        if (0 === this.indexRipple) {
          this.indexRipple = 1
          this.topRipple = $e.offsetY
          this.leftRipple = $e.offsetX
          if($e.srcElement ? $e.srcElement !== this.$el : false) {
            this.leftRipple += $e.target.offsetLeft
            this.topRipple += $e.target.offsetTop
          }
          const width = this.$el.clientWidth * 2.5
          this.heightRipple = width
          this.widthRipple = width
        }
        this.scopedProcessing = true
        if (this.onclick) {
          await this.onclick()
        } else {
          this.$emit('click')
        }
        this.scopedProcessing = false

        this.$nextTick(async () => {
          if (1 === this.indexRipple) {
            this.indexRipple = 2
            this.opacityRipple = 0

            await this.sleep(1200)
            this.timeRipple = 0
            this.timeOpacityRipple = 0
            this.heightRipple = 0
            this.widthRipple = 0
            this.opacityRipple = .9

            await this.sleep(50)
            this.timeRipple = 700
            this.timeOpacityRipple = 1200
            this.indexRipple = 0
          }
        })
      },
      sleep: msec => new Promise(r => setTimeout(r, msec))
    }
  }
</script>
