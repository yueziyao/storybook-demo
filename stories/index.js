/**
 * Created by yueziyao on 2018/12/30.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import {Button2} from '../src/Button';

storiesOf('Button', module)
    .add('with text', () => (
<Button>Hello Button</Button>
))
.add('with some emoji', () => (
<Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
))
storiesOf('atm', module)
    .add('demo', () => (
        <Button2>按钮组件</Button2>
    ))