import './js/fontawesome/all.min.js'
import * as components from './components'
import config, {setOptions} from './utils/config'
import {use, registerComponentProgrammatic} from './utils/plugins'

const Vuewel = {
  install: (Vue, options = {}) => {
    // Options
    setOptions(Object.assign(config, options))
    // Components
    for (let componentKey in components) {
      Vue.use(components[componentKey])
    }
    // Config component
    const VuewelProgrammatic = {
      setOptions(options) {
        setOptions(Object.assign(config, options))
      }
    }
    registerComponentProgrammatic(Vue, '$vuewel', VuewelProgrammatic)

    Vue.mixin({
      data() {
        return {
          wModals: {},
          openedWModalCount: 0
        }
      },
      methods: {
        registerWModal(ref, open, close) {
          if (!ref || !open || !close) return

          this.wModals[ref] = {open, close}
        },
        unregisterWModal(ref) {
          delete this.wModals[ref]
        },
        openWModal(ref) {
          if (!this.openedWModalCount) {
            document.body.classList.add('has-opened-modal')
          }
          if (this.wModals[ref]) {
            this.wModals[ref].open()
            this.openedWModalCount++
          }
        },
        closeWModal(ref) {
          if (this.wModals[ref]) {
            this.wModals[ref].close()
            this.openedWModalCount--
          }
          if (!this.openedWModalCount) {
            document.body.classList.remove('has-opened-modal')
          }
        }
      }
    })
  }
}

use(Vuewel)

export default Vuewel
