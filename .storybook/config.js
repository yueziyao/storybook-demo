/**
 * Created by yueziyao on 2018/12/30.
 */
import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/index.js');
    // You can require as many stories as you need.
}

configure(loadStories, module);