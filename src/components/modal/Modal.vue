<template>
  <transition :name="transition">
    <div class="modal" :class="{fullscreen: full, half: half}" v-if="active">
      <div class="modal-backdrop" @click="onClickBackdrop"></div>
      <component v-bind="props" v-on="events" :is="component" v-if="component"
                 :style="style" @close="close"/>
      <div class="modal-container" v-else>
        <div v-html="content" v-if="content"/>
        <slot v-else/>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'WModal',
    props: {
      programmatic: Boolean,
      component: [Object, Function],
      content: String,
      props: Object,
      events: Object,
      name: {
        type: String,
        default: ['', '', '', '', '', '', '', '', ''].reduce((y, x) => y + "abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(Math.random() * 36)])
      },
      width: {
        type: Number,
        default: 320
      },
      height: {
        type: Number,
        default: 480
      },
      canClose: {
        type: Boolean,
        default: true
      },
      full: Boolean,
      scroll: {
        type: String,
        default: 'clip',
        validator: value => ['clip', 'keep'].indexOf(value) >= 0
      },
      half: Boolean,
      animation: String
    },
    data() {
      return {
        active: false,
        transition: this.animation ? this.animation : this.half ? 'modal-half' : 'modal-basic'
      }
    },
    computed: {
      style: vm => (vm.full ? {} : {minWidth: `${vm.width}px`, maxHeight: `${vm.height}px`})
    },
    created() {
      this.registerWModal(this.name, this.activate, this.deactivate)
    },
    beforeMount() {
      this.programmatic && document.body.appendChild(this.$el)
    },
    mounted() {
      if (this.programmatic) this.active = true
      else if (this.active) this.handleScroll()
    },
    destroyed() {
      this.unregisterWModal(this.name)
    },
    methods: {
      activate() {
        this.active = true
      },
      deactivate() {
        this.active = false
      },
      open() {
        this.openWModal(this.name)
      },
      close() {
        this.closeWModal(this.name)
        this.$emit('close')
      },
      onClickBackdrop() {
        if (!this.canClose) return
        this.closeWModal(this.name)
      },
      handleScroll() {
        if (typeof window === 'undefined') return
        if (this.scroll === 'clip') {
          if (this.isActive) {
            document.documentElement.classList.add('is-clipped')
          } else {
            document.documentElement.classList.remove('is-clipped')
          }
          return
        }
        this.savedScrollTop = !this.savedScrollTop
            ? document.documentElement.scrollTop
            : this.savedScrollTop
        if (this.isActive) {
          document.body.classList.add('is-noscroll')
        } else {
          document.body.classList.remove('is-noscroll')
        }
        if (this.isActive) {
          document.body.style.top = `-${this.savedScrollTop}px`
          return
        }
        document.documentElement.scrollTop = this.savedScrollTop
        document.body.style.top = null
        this.savedScrollTop = null
      }
    }
  }
</script>
