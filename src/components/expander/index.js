import Expander from './Expander'

import {use, registerComponent} from '../../utils/plugins'

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Expander)
  }
}

use(Plugin)

export default Plugin
