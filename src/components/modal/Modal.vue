<template>
  <transition :name="transition">
    <div class="w-modal" v-if="active">
      <div class="modal-backdrop" v-if="!full" @click="onClickBackdrop"></div>
      <component v-bind="props" v-on="events" :is="component" v-if="component"
                 :style="{minWidth: `${width}px`, maxHeight: `${height}px`}"
                 @close="close"/>
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
      }
    },
    data() {
      return {
        active: false,
        transition: 'transition'
      }
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

<style lang="scss">
  .w-modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    z-index: 100;

    .modal-container {
      display: flex;
      flex-direction: column;
      margin: auto;
      z-index: 0;

      > * {
        background-color: white;
      }
      > :first-child {
        border-top-left-radius: $modal-radius;
        border-top-right-radius: $modal-radius;
      }
      > :last-child {
        border-bottom-left-radius: $modal-radius;
        border-bottom-right-radius: $modal-radius;
      }
      .modal-head {
        padding: .5rem;
        text-align: center;
        flex-basis: 32px
      }
      .modal-content {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        padding: .5rem .75rem;
      }
      .modal-foot {
        padding: .5rem;
        flex-basis: 32px
      }
    }
    .modal-backdrop {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, .7);
    }

    &.transition-enter-active,
    &.transition-leave-active {
      transition: opacity 100ms ease-out;

      .modal-container,
      .modal-container {
        transition: transform 150ms ease-out;
      }
    }
    &.transition-enter,
    &.transition-leave-active {
      opacity: 0;

      .modal-container,
      .modal-container {
        transform: scale(.95);
      }
    }
  }
</style>
