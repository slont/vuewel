export default {
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
}
