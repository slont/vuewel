<template>
  <transition :name="transition">
    <div class="w-modal" v-if="active">
      <div class="modal-backdrop" v-if="!full" @click="onClickBackdrop"></div>
      <div class="modal-container" :style="{width: `${width}px`, height: `${height}px`}">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'WModal',
    props: {
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
    methods: {
      open() {
        this.active = true
        this.openWModal(this.close)
      },
      onClickBackdrop() {
        if (!this.canClose) return
        this.closeWModal()
      },
      close() {
        this.active = false
        this.$emit('close')
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
      }
      .modal-content {
        flex: 1;
        padding: .5rem .75rem;
      }
      .modal-foot {
        padding: .5rem;
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
