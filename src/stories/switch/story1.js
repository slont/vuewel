export default {
  template: `
<div>
  <div class="field" style="padding: .25rem">
    <w-switch>Default</w-switch>
  </div>
  <div class="field" style="padding: .25rem">
    <w-switch class="is-large">Large</w-switch>
  </div>
  <div class="field" style="padding: .25rem">
    <w-switch class="is-primary">Primary</w-switch>
  </div>
  <div class="field" style="padding: .25rem">
    <w-switch class="is-success" :value="true">Success</w-switch>
  </div>
  <div class="field" style="padding: .25rem">
    <w-switch class="is-link">Link</w-switch>
  </div>
  <div class="field" style="padding: .25rem">
    <w-switch class="is-info">Info</w-switch>
  </div>
  <div class="field" style="padding: .25rem">
    <w-switch class="is-warning">Warning</w-switch>
  </div>
  <div class="field" style="padding: .25rem">
    <w-switch class="is-danger" :value="true" true-label="ON" false-label="OFF">Danger</w-switch>
  </div>
</div>`
}
