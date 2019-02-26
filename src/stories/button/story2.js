export default {
  data() {
    return {
      count: 0
    }
  },
  template: `
<div>
  <div>
    クリックイベント毎にカウントし、0.5秒後にアラートを出す<br/>
    Count: {{ count }}
  </div>
  <div>
    <label>処理中にブロックしない (@click)</label>
    <w-button @click="asyncAlert"><span>普通のボタン</span></w-button>
  </div>
  <div>
    <label>処理中にブロックする (:onclick)</label>
    <w-button class="is-primary is-outlined" :onclick="asyncAlert"><span>ブロックボタン</span></w-button>
  </div>
  <div>
    <label>処理しない</label>
    <w-button class="is-primary" :onclick="asyncAlert" disabled><span>Disabledボタン</span></w-button>
    <w-button class="is-primary" :onclick="asyncAlert" processing><span>Processingボタン</span></w-button>
  </div>
  <div>
    Event<br/>
    <pre>
    async asyncAlert() {
      this.count++
      await this.sleep(500)

      window.alert(\\\`$count回クリックされました\\\`)
      this.count = 0
    }
    </pre>
  </div>
</div>`,
  methods: {
    async asyncAlert() {
      this.count++
      await this.sleep(500)

      window.alert(`${this.count}回クリックされました`)
      this.count = 0
    },
    sleep: msec => new Promise(resolve => setTimeout(resolve, msec))
  }
}
