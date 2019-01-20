import {linkTo} from '@storybook/addon-links'

export default {
  template: `
<div>
  <div class="field">
    <label for="">Color</label>
    <w-button>Default</w-button>
    <w-button class="is-primary">Primary</w-button>
    <w-button class="is-red">Red</w-button>
    <w-button class="is-green">Green</w-button>
  </div>
  
  <div class="field">
    <label for="">Outlined</label>
    <w-button>Default</w-button>
    <w-button class="is-primary is-outlined">Primary</w-button>
    <w-button class="is-red is-outlined">Red</w-button>
    <w-button class="is-green is-outlined">Green</w-button>
  </div>
  
  <div class="field">
    <label for="">Size</label>
    <w-button class="is-mini">Mini</w-button>
    <w-button class="is-small">Small</w-button>
    <w-button>Default</w-button>
    <w-button class="is-large">Large</w-button>
    <w-button class="is-huge">Huge</w-button>
  </div>
  
  <div class="field">
    <label for="">Rounded</label>
    <w-button class="is-small is-rounded">Small</w-button>
    <w-button class="is-primary is-rounded">Primary</w-button>
    <w-button class="is-large is-red is-outlined is-rounded">Outlined</w-button>
  </div>
  
  <div class="field">
    <label for="">Loading</label>
    <w-button class="is-small is-rounded">Small</w-button>
    <w-button class="is-primary is-loading">Primary</w-button>
    <w-button class="is-large is-red is-outlined is-loading">Outlined</w-button>
  </div>
  
  <div class="field">
    <label for="">Disabled</label>
    <w-button class="is-small is-rounded" disabled>Small</w-button>
    <w-button class="is-primary" disabled>Primary</w-button>
    <w-button class="is-large is-red is-outlined" disabled>Outlined</w-button>
  </div>
</div>`,
  methods: {action: linkTo('Button')},
}
