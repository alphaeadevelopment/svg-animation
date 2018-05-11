import React from 'react';
import injectSheet from 'react-jss';
import ColouredBall from '../ColouredBall';

const styles = {
  root: {
    display: 'inline-block',
    'animation-name': 'myanimation',
    'animation-duration': '1s',
    'animation-iteration-count': 'infinite',
    'animation-direction': 'alternate',
    'animation-timing-function': 'ease-in-out',
  },
  '@keyframes myanimation': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(50px)',
    },
  },
};

export const RawCssAnimatedBall = ({ classes, ...rest }) => (
  <div
    className={classes.root}
  >
    <ColouredBall {...rest} />
  </div>
);

export default injectSheet(styles)(RawCssAnimatedBall);
