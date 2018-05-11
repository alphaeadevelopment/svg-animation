import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { Ball } from '../src/client/components';

storiesOf('Ball', module)
  .add('with css animation', () => (
    <Ball type='css' />
  ))
  .add('with smil animation', () => (
    <Ball type='smil' />
  ))
  .add('with gsap animation', () => (
    <Ball type='gsap' />
  ))
  .add('with raf animation', () => (
    <Ball type='raf' />
  ));
