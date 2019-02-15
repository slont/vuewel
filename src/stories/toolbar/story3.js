export default {
  template: `
<div>
  <w-toolbar ref="toolbar" row="3" height="48" :scroll-top="scrollY">
    <div class="">タイトル</div>
    <div class="">タイトル</div>
    <div class="">タイトル</div>
  </w-toolbar>
  <div ref="scrollable" @scroll="onScroll" style="height: 100vh; overflow-y: scroll;">
    <div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div>
    <div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div>
    <div><w-button class="is-primary" @click="close">CLOSE</w-button></div>
    <div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div>
    <div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div>
    <div><w-button class="is-primary" @click="open">OPEN</w-button></div>
    <div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div>
    <div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div>
    <div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div>
    <div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div>
    <div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div>
  </div>
</div>`,
  data() {
    return {
      scrollY: 0
    }
  },
  methods: {
    onScroll($event) {
      this.scrollY = $event.target.scrollTop
    },
    open() {
      this.$refs.toolbar.open()
    },
    close() {
      this.$refs.toolbar.close()
    }
  }
}
