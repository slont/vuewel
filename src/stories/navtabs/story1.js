export default {
  template: `
<div>
  <div class="field">
    <w-navtabs :tabs="tabs"></w-navtabs>
  </div>
  <div class="field">
    <w-navtabs v-model="tabId" :tabs="tabs"></w-navtabs>
  </div>
</div>`,
  data() {
    return {
      tabs: [
        {id: 1, name: 'ホーム'},
        {id: 'aaaaa', name: '新着'},
        {id: 3, name: 'おすすめ'},
        {id: 4, name: 'お気に入り'}
      ],
      tabId: 3
    }
  }
}
