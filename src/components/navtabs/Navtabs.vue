<template>
  <ul class="w-navtabs">
    <li v-for="(tab, i) in tabs" :key="tab.id"
        class="w-navtab" :class="{'is-active': activeIndex === i}"
        @click="onClick(i)">
      <span>{{ tab.name }}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'WNavtabs',
    props: {
      tabs: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        activeIndex: 0
      }
    },
    methods: {
      onClick(index) {
        this.activeIndex = index
        const tab = this.tabs[index]
        if (tab.path && this.$router) {
          this.$router.push(tab.path)
        } else if (tab.url && window) {
          window.open(tab.url, '_blank')
        }
        this.$emit('click', tab)
      }
    }
  }
</script>

<style lang="scss">
  .w-navtabs {
    position: relative;
    display: flex;
    margin: 0;
    padding: 0;

    .w-navtab {
      position: relative;
      display: inline-flex;
      padding: .5rem .875rem;
      align-items: center;
      cursor: pointer;

      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 2px;
        background: lighten($main-color, 20%);
        transform: scale(0, 1);
        transform-origin: center top;
        transition: all .3s;
      }
      &:hover:after {
        transform: scale(1, 1);
      }
      &.is-active {
        font-weight: bold;

        &:after {
          transform: scale(1, 1);
          background-color: $main-color;
        }
      }
    }
  }
</style>
