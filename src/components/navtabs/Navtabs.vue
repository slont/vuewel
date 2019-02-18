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
      value: {
        type: String | Number
      },
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
    created() {
      this.setTab(this.value)
    },
    methods: {
      setTab(value) {
        if (null != value) {
          this.activeIndex = this.tabs.findIndex(t => t.id === value)
        }
      },
      onClick(index) {
        this.activeIndex = index
        const tab = this.tabs[index]
        if (tab.path && this.$router) {
          this.$router.push(tab.path)
        } else if (tab.url && typeof window !== 'undefined') {
          window.open(tab.url, '_blank')
        }
        this.$emit('input', this.tabs[this.activeIndex].id)
        this.$emit('click', tab)
      }
    }
  }
</script>
