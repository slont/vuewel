<template>
  <transition :name="transition">
    <div class="w-modal" v-if="active">
      <div class="modal-backdrop" v-if="!full" @click="onClickBackdrop"></div>
      <div class="modal-container" :style="{minWidth: `${width}px`, maxHeight: `${height}px`}">
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'WModal',
    props: {
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
      full: Boolean
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
