/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import Welcome from './Welcome.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: {Welcome},
  template: '<welcome :showApp="action" />',
  methods: {action: linkTo('Button')},
}));

storiesOf('Button', module)
    .add('Styles', () => ({
      template: `
<div>
  <div class="field">
    <label for="">Color</label>
    <w-button>Default</w-button>
    <w-button class="is-primary">Primary</w-button>
    <w-button class="is-red">Red</w-button>
    <w-button class="is-green">Green</w-button>
  </div>
  
  <div class="field">
    <label for="">Outlined</label>
    <w-button>Default</w-button>
    <w-button class="is-primary is-outlined">Primary</w-button>
    <w-button class="is-red is-outlined">Red</w-button>
    <w-button class="is-green is-outlined">Green</w-button>
  </div>
  
  <div class="field">
    <label for="">Size</label>
    <w-button class="is-mini">Mini</w-button>
    <w-button class="is-small">Small</w-button>
    <w-button>Default</w-button>
    <w-button class="is-large">Large</w-button>
    <w-button class="is-huge">Huge</w-button>
  </div>
  
  <div class="field">
    <label for="">Rounded</label>
    <w-button class="is-small is-rounded">Small</w-button>
    <w-button class="is-primary is-rounded">Primary</w-button>
    <w-button class="is-large is-red is-outlined is-rounded">Outlined</w-button>
  </div>
  
  <div class="field">
    <label for="">Loading</label>
    <w-button class="is-small is-rounded">Small</w-button>
    <w-button class="is-primary is-loading">Primary</w-button>
    <w-button class="is-large is-red is-outlined is-loading">Outlined</w-button>
  </div>
  
  <div class="field">
    <label for="">Disabled</label>
    <w-button class="is-small is-rounded" disabled>Small</w-button>
    <w-button class="is-primary" disabled>Primary</w-button>
    <w-button class="is-large is-red is-outlined" disabled>Outlined</w-button>
  </div>
</div>`,
      methods: {action: linkTo('Button')},
    }))
    .add('Click action', () => ({
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
    <w-button @click="asyncAlert">普通のボタン</w-button>
  </div>
  <div>
    <label>処理中にブロックする (:onclick)</label>
    <w-button class="is-primary is-outlined" :onclick="asyncAlert">ブロックボタン</w-button>
  </div>
  <div>
    <label>処理しない</label>
    <w-button class="is-primary" :onclick="asyncAlert" disabled>Disabledボタン</w-button>
    <w-button class="is-primary" :onclick="asyncAlert" processing>Processingボタン</w-button>
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
</div>
`,
      methods: {
        async asyncAlert() {
          this.count++
          await this.sleep(500)

          window.alert(`${this.count}回クリックされました`)
          this.count = 0
        },
        sleep: msec => new Promise(resolve => setTimeout(resolve, msec))
      }
    }));


storiesOf('Modal', module)
    .add('Styles', () => ({
      template: `
<div>
  <div>
    Modal Test
  </div>
  <div class="field">
    <w-button class="is-rounded" @click="openModal('modal1')">
      <span class="icon">あ</span>
    </w-button>
    
    <w-modal ref="modal1" can-close>
      <div class="modal-head">Head 1</div>
      <div class="modal-content">
        <div>Content</div>
        <div>
          <w-button class="is-rounded" @click="openModal('modal2')">
            <span class="icon">い</span>
          </w-button>
          <w-button class="is-rounded" @click="openModal('modal3')">
            <span class="icon">う</span>
          </w-button>
        </div>

        <w-modal ref="modal3" name="modal3" :can-close="false">
          <div class="modal-head">Head 3</div>
          <div class="modal-content">
            <div>Content</div><div>Content</div><div>Content</div><div>Content</div><div>Content</div>
            <div>Content</div><div>Content</div><div>Content</div><div>Content</div><div>Content</div>
            <div>Content</div><div>Content</div><div>Content</div><div>Content</div><div>Content</div>
            <div>Content</div><div>Content</div><div>Content</div><div>Content</div><div>Content</div>
            <div>Content</div><div>Content</div><div>Content</div><div>Content</div><div>Content</div>
            <div>Content</div><div>Content</div><div>Content</div><div>Content</div><div>Content</div>
            <div>Content</div><div>Content</div><div>Content</div><div>Content</div><div>Content</div>
            <div>Content</div><div>Content</div><div>Content</div><div>Content</div><div>Content</div>
            <div>Content</div><div>Content</div><div>Content</div><div>Content</div><div>Content</div>
            <div>Content</div><div>Content</div><div>Content</div><div>Content</div><div>Content</div>
            <div>Content</div><div>Content</div><div>Content</div><div>Content</div><div>Content</div>
            <div>Content</div><div>Content</div><div>Content</div><div>Content</div><div>Content</div>
          </div>
          <div class="modal-foot">
            <w-button @click="closeModal('modal3')">キャンセル</w-button>
            <w-button class="is-green" @click="closeModal('modal3')">OK</w-button>
          </div>
        </w-modal>
      </div>
      <div class="modal-foot">
        <w-button @click="closeModal('modal1')">キャンセル</w-button>
        <w-button class="is-green" @click="closeModal('modal1')">OK</w-button>
      </div>
    </w-modal>

    <w-modal ref="modal2" name="modal2">
      <div class="modal-head">Head 2</div>
      <div class="modal-content">Content</div>
      <div class="modal-foot">
        <w-button @click="closeModal('modal2')">キャンセル</w-button>
        <w-button class="is-green" @click="closeModal('modal2')">OK</w-button>
      </div>
    </w-modal>
  </div>
</div>`,
      methods: {
        openModal(ref) {
          this.$refs[ref].open()
        },
        closeModal(ref) {
          this.$refs[ref].close()
        }
      }
    }));

/* eslint-enable react/react-in-jsx-scope */
