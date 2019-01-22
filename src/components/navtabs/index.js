import Navtabs from './Navtabs'

import {use, registerComponent} from '../../utils/plugins'

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Navtabs)
  }
}

use(Plugin)

export default Plugin
