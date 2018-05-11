import React from 'react';
import ColouredBall from '../ColouredBall';

const easeInOut = '0.420, 0.000, 0.580, 1.000';

export const RawSmilAnimatedBall = ({ ...rest }) => (
  <div >
    <ColouredBall {...rest}>
      <animateTransform
        begin='0s'
        attributeName='transform'
        type='translate'
        from='0'
        to='0'
        fill='freeze'
        values='0 ; 50 ; 0'
        dur='2s'
        repeatCount='indefinite'
        keyTimes='0 ; .5 ; 1'
        keySplines={`${easeInOut} ; ${easeInOut}`}
        calcMode='spline'
      />
    </ColouredBall>
  </div>
);

export default RawSmilAnimatedBall;

