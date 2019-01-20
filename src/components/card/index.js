import Card from './Card'

import {use, registerComponent} from '../../utils/plugins'

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Card)
  }
}

use(Plugin)

export default Plugin
