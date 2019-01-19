import _Vue from 'vue'

declare type ModalConfig = {
  component?: typeof _Vue
  parent?: _Vue
  props?: any
  events?: {
    [index: string]: Function
  }
  width?: string | number
  height?: string | number
  full?: boolean
  canClose?: boolean | Array<any>
}

export declare const ModalProgrammatic: {
  open: (params: ModalConfig | string) => any;
}
