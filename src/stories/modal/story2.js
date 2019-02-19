const ModalForm1 = {
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
const ModalForm2 = {
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
    <w-button class="is-rounded" @click="openModal1">
      <span class="icon">Open Modal1</span>
    </w-button>
    <w-button class="is-rounded" @click="openModal2">
      <span class="icon">Open Modal2</span>
    </w-button>
    <w-button class="is-rounded" @click="openModal3">
      <span class="icon">Open Modal3</span>
    </w-button>
    <w-button class="is-rounded" @click="openModal4">
      <span class="icon">Open Modal4</span>
    </w-button>
  </div>
</div>`,
  methods: {
    openModal1() {
      this.$modal.open({
        parent: this,
        component: ModalForm1
      })
    },
    openModal2() {
      this.$modal.open({
        parent: this,
        full: true,
        component: ModalForm1
      })
    },
    openModal3() {
      this.$modal.open({
        parent: this,
        half: true,
        component: ModalForm2
      })
    },
    openModal4() {
      this.$modal.open({
        parent: this,
        animation: 'modal-org1',
        component: ModalForm1
      })
    },
    closeModal(ref) {
      this.$refs[ref].close()
    }
  }
}
