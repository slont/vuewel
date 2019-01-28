const ModalForm = {
  props: ['email', 'password'],
  template: `
            <div class="modal-container">
                    <header class="modal-head">
                        <span>Login</span>
                    </header>
                    <section class="modal-content">
                        <input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required/>
                        <input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                required/>
                    </section>
                    <footer class="modal-foot">
                        <w-button class="button" type="button" @click="$parent.close()">Close</w-button>
                        <w-button class="button is-primary">Login</w-button>
                    </footer>
                </div>
        `
}

export default {
  template: `
<div>
  <div>
    Modal Test (Programmatic)
  </div>
  <div class="field">
    <w-button class="is-rounded" @click="openModal">
      <span class="icon">Open Modal</span>
    </w-button>
  </div>
</div>`,
  methods: {
    openModal() {
      this.$modal.open({
        parent: this,
        // full: true,
        component: ModalForm
      })
    },
    closeModal(ref) {
      this.$refs[ref].close()
    }
  }
}
