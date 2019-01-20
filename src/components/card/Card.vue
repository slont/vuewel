<template>
  <div class="w-card">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'WCard'
  }
</script>

<style lang="scss" scoped>
  .w-card {
    border-radius: 6px;
    box-shadow: 1px 2px 16px rgba(0, 0, 0, .2);
    overflow: hidden;

    > .image {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    > .card-content {
      padding: .5rem;
    }
    > .card-footer {
      .w-button {
        border: none;
        box-shadow: none;
      }
    }
  }
</style>
