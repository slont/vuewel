<template>
  <div class="w-rate" :style="{minWidth: `${1.5 * num}em`, maxWidth: `${1.5 * num}em`}">
    <div class="stars-mask">
      <w-icon v-for="i in num" :key="i" icon="fas fa-star"
              @mousemove.native.stop="onMouseMove"
              @mouseleave.native.stop="onMouseLeave"
              @mouseup.native.stop="onMouseUp"
              @touchstart.native.stop="onTouchStart"
              @touchmove.native.stop="onTouchMove"/>
    </div>
    <div class="stars" :style="{width: `${1.5 * val / unit}em`}">
      <w-icon v-for="i in num" :key="i" icon="fas fa-star"
              @mousemove.native.stop="onMouseMove"
              @mouseleave.native.stop="onMouseLeave"
              @mouseup.native.stop="onMouseUp"
              @touchstart.native.stop="onTouchStart"
              @touchmove.native.stop="onTouchMove"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WRate',
    props: {
      value: {
        type: Number,
        default: 3
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 5
      },
      unit: {
        type: Number,
        default: 1
      },
      decimal: {
        type: Number,
        default: 2
      },
      readonly: Boolean
    },
    data() {
      return {
        val: this.value
      }
    },
    computed: {
      num() {
        return Math.floor(this.max / this.unit)
      }
    },
    methods: {
      onMouseUp($event) {
        if (this.readonly) return

        this.val = this.getMouseValue($event)
        this.$emit('input', this.val)
      },
      onMouseMove($event) {
        if (this.readonly) return

        this.val = this.getMouseValue($event)
      },
      onMouseLeave() {
        if (this.readonly) return

        this.val = this.value
      },
      onTouchStart($event) {
        if (this.readonly) return

        this.val = this.getTouchValue($event)
        this.$emit('input', this.val)
      },
      onTouchMove($event) {
        if (this.readonly) return

        this.val = this.getTouchValue($event)
        this.$emit('input', this.val)
      },
      getMouseValue($event) {
        const val = Math.round(($event.clientX - this.$el.offsetLeft) / this.$el.getBoundingClientRect().width * this.max * this.decimal) / this.decimal
        return Math.min(this.max, Math.max(this.min, val))
      },
      getTouchValue($event) {
        const val = Math.round(($event.changedTouches[0].clientX - this.$el.getBoundingClientRect().x) / this.$el.getBoundingClientRect().width * this.max * this.decimal) / this.decimal
        return Math.min(this.max, Math.max(this.min, val))
      }
    }
  }
</script>
