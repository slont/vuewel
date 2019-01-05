import './scss/global.scss'

import * as components from './components'

import config, {setOptions} from './utils/config'
import {use} from './utils/plugins'

const Vuewel = {
  install: (Vue, options = {}) => {
    // Options
    setOptions(Object.assign(config, options))
    // Components
    for (let componentKey in components) {
      Vue.use(components[componentKey])
    }
    Vue.mixin({
      data() {
        return {
          openedWModals: []
        }
      },
      methods: {
       openWModal(closeFunc) {
          const body = document.body

         if (this.openedWModals.length) {
           body.classList.add('has-opened-modal')
         }
         if (closeFunc) {
           this.openedWModals.push(closeFunc)
         }
        },
        closeWModal() {
          const body = document.body

          if (this.openedWModals.length) {
            const func = this.openedWModals.pop()
            func()
            body.classList.remove('has-opened-modal')
          }
        }
      }
    })
  }
}

use(Vuewel)

export default Vuewel
