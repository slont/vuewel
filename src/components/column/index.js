import Column from './Column'

import {use, registerComponent} from '../../utils/plugins'

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Column)
  }
}

use(Plugin)

export default Plugin
