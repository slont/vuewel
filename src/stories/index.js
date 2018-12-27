/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';
import WButton from '../components/WButton';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: {Welcome},
  template: '<welcome :showApp="action" />',
  methods: {action: linkTo('Button')},
}));

storiesOf('Button', module)
    .add('Styles', () => ({
      components: {WButton},
      template: `
<div>
  <div class="is-field">
    <label for="">Color</label>
    <w-button>Default</w-button>
    <w-button cls="is-primary">Primary</w-button>
    <w-button cls="is-red">Red</w-button>
    <w-button cls="is-green">Green</w-button>
  </div>
  
  <div class="is-field">
    <label for="">Outlined</label>
    <w-button>Default</w-button>
    <w-button cls="is-primary is-outlined">Primary</w-button>
    <w-button cls="is-red is-outlined">Red</w-button>
    <w-button cls="is-green is-outlined">Green</w-button>
  </div>
  
  <div class="is-field">
    <label for="">Size</label>
    <w-button cls="is-smaller">Smaller</w-button>
    <w-button cls="is-small">Small</w-button>
    <w-button>Default</w-button>
    <w-button cls="is-large">Large</w-button>
    <w-button cls="is-larger">Larger</w-button>
  </div>
</div>`,
      methods: {action: linkTo('Button')},
    }))
    .add('Click action', () => ({
      components: {WButton},
      template: `
<w-button>Default</w-button>
`,
      methods: {action: action('clicked')},
    }));

/* eslint-enable react/react-in-jsx-scope */
