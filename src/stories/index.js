/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {storiesOf} from '@storybook/vue';
// import {linkTo} from '@storybook/addon-links';
import '../sass/all.sass'

// import Welcome from './Welcome.vue';
import ButtonStory from './button'
import ModalStory from './modal'
import ToolbarStory from './toolbar'
import NavtabsStory from './navtabs'
import ColumnsStory from './columns'
import IconStory from './icon'
import CardStory from './card'
import RateStory from './rate'
import ExpanderStory from './expander'
import SwitchStory from './switch'
import RadioStory from './radio'

// storiesOf('Welcome', module).add('to Storybook', () => ({
//   components: {Welcome},
//   template: '<welcome :showApp="action" />',
//   methods: {action: linkTo('Button')}
// }))

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

storiesOf('Navtabs', module)
    .add('Basic', () => NavtabsStory.story1)

storiesOf('Columns', module)
    .add('Size', () => ColumnsStory.story1)
    .add('Multi', () => ColumnsStory.story2)

storiesOf('Icon', module)
    .add('Basic', () => IconStory.story1)

storiesOf('Card', module)
    .add('Basic', () => CardStory.story1)

storiesOf('Rate', module)
    .add('Basic', () => RateStory.story1)

storiesOf('Expander', module)
    .add('Basic', () => ExpanderStory.story1)
    .add('Using over', () => ExpanderStory.story2)

storiesOf('Switch', module)
    .add('Basic', () => SwitchStory.story1)

storiesOf('Radio', module)
    .add('Basic', () => RadioStory.story1)

/* eslint-enable react/react-in-jsx-scope */
