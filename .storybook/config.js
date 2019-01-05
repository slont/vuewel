import {configure} from '@storybook/vue';

import Vue from 'vue';
import Vuewel from '../src/index.js'

Vue.use(Vuewel)

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories/index');
}

configure(loadStories, module);
