import React from 'react';
import BallGradient from './BallGradient';
import Circle from './Circle';

const width = 30;
const padding = 5;

export const RawColouredBall = ({ onClick, children }) => (
  <svg
    width={(width * 2) + (padding * 2)}
    height={(width * 2) + (padding * 2)}
    onClick={onClick}
  >
    {children}
    <BallGradient id='grad_101' />
    <Circle width={width} padding={padding} gradientId='grad_101' />
  </svg>
);
export default RawColouredBall;
