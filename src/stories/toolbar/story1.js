import {linkTo} from '@storybook/addon-links'

export default {
  template: `
<div>
  <w-toolbar>
    <div>タイトル</div>
    <div>タイトル</div>
    <div>タイトル</div>
  </w-toolbar>
</div>`,
  methods: {action: linkTo('Toolbar')},
}
