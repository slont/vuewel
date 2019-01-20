import Columns from './Columns'

import {use, registerComponent} from '../../utils/plugins'

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Columns)
  }
}

use(Plugin)

export default Plugin
