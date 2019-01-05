import './scss/global.scss'

import * as components from './components'

import config, {setOptions} from './utils/config'
import {use} from './utils/plugins'

const Vuewel = {
  install(Vue, options = {}) {
    // Options
    setOptions(Object.assign(config, options))
    // Components
    for (let componentKey in components) {
      Vue.use(components[componentKey])
    }
  }
}

use(Vuewel)

export default Vuewel
