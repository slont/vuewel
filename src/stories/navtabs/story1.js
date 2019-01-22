export default {
  template: `
<div>
  <div class="field">
    <w-navtabs :tabs="tabs"></w-navtabs>
  </div>
</div>`,
  data() {
    return {
      tabs: [
        {id: 1, name: 'ホーム'},
        {id: 2, name: '新着'},
        {id: 3, name: 'おすすめ'},
        {id: 4, name: 'お気に入り'}
      ]
    }
  }
}
