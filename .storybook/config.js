import {configure} from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
// import WButton from '../src/components/WButton';

// Register custom components.
// Vue.component('test', WButton);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories/index');
}

configure(loadStories, module);
