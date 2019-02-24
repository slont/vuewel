import {linkTo} from '@storybook/addon-links'

export default {
  template: `
<div>
  <div class="field" style="padding: .5rem;">
    <label for="">Color</label>
    <w-button>Default</w-button>
    <w-button class="is-primary"><span>Primary</span></w-button>
    <w-button class="is-success"><span>Success</span></w-button>
    <w-button class="is-link"><span>Link</span></w-button>
    <w-button class="is-info"><span>Info</span></w-button>
    <w-button class="is-warning"><span>Warning</span></w-button>
    <w-button class="is-danger"><span>Danger</span></w-button>
  </div>

  <div class="field" style="padding: .5rem;">
    <label for="">Has Shadow</label>
    <w-button>Default</w-button>
    <w-button class="is-primary has-shadow"><span>Primary</span></w-button>
    <w-button class="is-success has-shadow"><span>Success</span></w-button>
    <w-button class="is-link has-shadow"><span>Link</span></w-button>
    <w-button class="is-info has-shadow"><span>Info</span></w-button>
    <w-button class="is-warning has-shadow"><span>Warning</span></w-button>
    <w-button class="is-danger has-shadow"><span>Danger</span></w-button>
  </div>

  <div class="field" style="padding: .5rem;">
    <label for="">Gradient</label>
    <w-button class="is-primary" gradient><span>Primary</span></w-button>
    <w-button class="is-success" gradient><span>Success</span></w-button>
    <w-button class="is-link" gradient><span>Link</span></w-button>
    <w-button class="is-info" gradient><span>Info</span></w-button>
    <w-button class="is-warning" gradient><span>Warning</span></w-button>
    <w-button class="is-danger" gradient><span>Danger</span></w-button>
  </div>

  <div class="field" style="padding: .5rem;">
    <label for="">Gradient with Shadow</label>
    <w-button class="is-primary has-shadow" gradient><span>Primary</span></w-button>
    <w-button class="is-success has-shadow" gradient><span>Success</span></w-button>
    <w-button class="is-link has-shadow" gradient><span>Link</span></w-button>
    <w-button class="is-info has-shadow" gradient><span>Info</span></w-button>
    <w-button class="is-warning has-shadow" gradient><span>Warning</span></w-button>
    <w-button class="is-danger has-shadow" gradient><span>Danger</span></w-button>
  </div>

  <div class="field" style="padding: .5rem;">
    <label for="">Outlined</label>
    <w-button>Default</w-button>
    <w-button class="is-primary" outlined><span>Primary</span></w-button>
    <w-button class="is-success" outlined><span>Success</span></w-button>
    <w-button class="is-link" outlined><span>Link</span></w-button>
    <w-button class="is-info" outlined><span>Info</span></w-button>
    <w-button class="is-warning" outlined><span>Warning</span></w-button>
    <w-button class="is-danger" outlined><span>Danger</span></w-button>
  </div>
  
  <div class="field" style="padding: .5rem;">
    <label for="">Outlined with Shadow</label>
    <w-button>Default</w-button>
    <w-button class="is-primary has-shadow" outlined><span>Primary</span></w-button>
    <w-button class="is-success has-shadow" outlined><span>Success</span></w-button>
    <w-button class="is-link has-shadow" outlined><span>Link</span></w-button>
    <w-button class="is-info has-shadow" outlined><span>Info</span></w-button>
    <w-button class="is-warning has-shadow" outlined><span>Warning</span></w-button>
    <w-button class="is-danger has-shadow" outlined><span>Danger</span></w-button>
  </div>
  
  <div class="field has-bg-black" style="padding: .5rem;">
    <label class="has-white">Inverted</label>
    <w-button inverted>Default</w-button>
    <w-button class="is-primary" inverted><span>Primary</span></w-button>
    <w-button class="is-success" inverted><span>Success</span></w-button>
    <w-button class="is-link" inverted><span>Link</span></w-button>
    <w-button class="is-info" inverted><span>Info</span></w-button>
    <w-button class="is-warning" inverted><span>Warning</span></w-button>
    <w-button class="is-danger" inverted><span>Danger</span></w-button>
  </div>
  
  <div class="field has-bg-black" style="padding: .5rem;">
    <label class="has-white">Invert Outlined</label>
    <w-button class="is-primary" inverted outlined><span>Primary</span></w-button>
    <w-button class="is-success" inverted outlined><span>Success</span></w-button>
    <w-button class="is-link" inverted outlined><span>Link</span></w-button>
    <w-button class="is-info" inverted outlined><span>Info</span></w-button>
    <w-button class="is-warning" inverted outlined><span>Warning</span></w-button>
    <w-button class="is-danger" inverted outlined><span>Danger</span></w-button>
  </div>
  
  <div class="field has-bg-black" style="padding: .5rem;">
    <label class="has-white">Invert Outlined with Shadow</label>
    <w-button class="is-primary has-shadow" inverted outlined><span>Primary</span></w-button>
    <w-button class="is-success has-shadow" inverted outlined><span>Success</span></w-button>
    <w-button class="is-link has-shadow" inverted outlined><span>Link</span></w-button>
    <w-button class="is-info has-shadow" inverted outlined><span>Info</span></w-button>
    <w-button class="is-warning has-shadow" inverted outlined><span>Warning</span></w-button>
    <w-button class="is-danger has-shadow" inverted outlined><span>Danger</span></w-button>
  </div>
  
  <div class="field" style="padding: .5rem;">
    <label for="">Size</label>
    <w-button class="is-mini">Mini</w-button>
    <w-button class="is-small">Small</w-button>
    <w-button>Default</w-button>
    <w-button class="is-large">Large</w-button>
    <w-button class="is-huge">Huge</w-button>
  </div>
  
  <div class="field" style="padding: .5rem;">
    <label for="">Rounded</label>
    <w-button class="is-small" rounded>Small</w-button>
    <w-button class="is-primary" rounded><span>Primary</span></w-button>
    <w-button class="is-success" outlined rounded><span>Success</span></w-button>
    <w-button class="is-link" outlined rounded><span>Link</span></w-button>
    <w-button class="is-danger" outlined rounded><span>Danger</span></w-button>
  </div>
  
  <div class="field" style="padding: .5rem;">
    <label for="">Loading</label>
    <w-button class="is-small" processing>Small</w-button>
    <w-button class="is-primary" processing><span>Primary</span></w-button>
    <w-button class="is-success" outlined processing><span>Success</span></w-button>
    <w-button class="is-link" outlined processing><span>Link</span></w-button>
    <w-button class="is-danger" outlined processing><span>Danger</span></w-button>
  </div>
  
  <div class="field" style="padding: .5rem;">
    <label for="">Disabled</label>
    <w-button class="is-small" rounded disabled>Small</w-button>
    <w-button class="is-primary" disabled><span>Primary</span></w-button>
    <w-button class="is-success" outlined disabled><span>Success</span></w-button>
    <w-button class="is-link" outlined disabled><span>Link</span></w-button>
    <w-button class="is-danger" outlined disabled><span>Danger</span></w-button>
  </div>
</div>`,
  methods: {action: linkTo('Button')},
}
