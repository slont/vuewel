import _Vue from 'vue'

import {ModalProgrammatic} from './components'

declare module 'vue/types/vue' {
  interface Vue {
    $modal: typeof ModalProgrammatic,
  }
}

export declare type VuewelConfig = {
  // defaultNoticeQueue?: boolean;
}

declare const _default: {
  install(Vue: typeof _Vue, config: VuewelConfig): void;
}

export {
  ModalProgrammatic
}

export default _default
