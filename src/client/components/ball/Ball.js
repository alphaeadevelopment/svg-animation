import React from 'react';
import CssAnimatedBall from './css';
import SmilAnimatedBall from './smil';
import GsapAnimatedBall from './gsap';
import RafAnimatedBall from './raf';

export default ({ type }) => {
  switch (type) {
    case 'css':
      return <CssAnimatedBall />;
    case 'smil':
      return <SmilAnimatedBall />;
    case 'gsap':
      return <GsapAnimatedBall />;
    case 'raf':
      return <RafAnimatedBall />;
    default:
      return null;
  }
};
