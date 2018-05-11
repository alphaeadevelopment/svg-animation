import React from 'react';

export default ({ width, padding, gradientId }) => (
  <circle
    cx={width + padding}
    cy={width + padding}
    r={width}
    strokeWidth={2}
    fill={`url(#${gradientId})`}
  />
);
