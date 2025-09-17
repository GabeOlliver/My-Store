import React from 'react';
import './Skeleton.css';

function Skeleton({ width, height, style, className }) {
  return (
    <div
      className={`skeleton ${className || ''}`}
      style={{ width, height, ...style }}
    ></div>
  );
}

export default Skeleton;