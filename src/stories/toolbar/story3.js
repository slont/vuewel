export default {
  template: `
<div>
  <w-toolbar row="3" height="48" :scroll-top="scrollY">
    <div class="">タイトル</div>
    <div class="">タイトル</div>
    <div class="">タイトル</div>
  </w-toolbar>
  <div ref="scrollable" @scroll="onScroll" style="height: 100vh; overflow-y: scroll;">
    <div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div>
    <div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div>
    <div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div>
    <div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div><div>スクロール用</div>
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
    }
  }
}
