/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {storiesOf} from '@storybook/vue';
import {linkTo} from '@storybook/addon-links';

import Welcome from './Welcome.vue';
import ButtonStory from './button'
import ModalStory from './modal'
import ToolbarStory from './toolbar'
import ColumnStory from './column'
import IconStory from './icon'

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: {Welcome},
  template: '<welcome :showApp="action" />',
  methods: {action: linkTo('Button')}
}))

storiesOf('Button', module)
    .add('Styles', () => ButtonStory.story1)
    .add('Click action', () => ButtonStory.story2)

storiesOf('Modal', module)
    .add('Template', () => ModalStory.story1)
    .add('Programmatic', () => ModalStory.story2)

storiesOf('Toolbar', module)
    .add('Basic', () => ToolbarStory.story1)
    .add('2 rows', () => ToolbarStory.story2)
    .add('Scrollable 3 rows', () => ToolbarStory.story3)

storiesOf('Column', module)
    .add('Size', () => ColumnStory.story1)
    .add('Multi', () => ColumnStory.story2)

storiesOf('Icon', module)
    .add('Basic', () => IconStory.story1)

/* eslint-enable react/react-in-jsx-scope */
