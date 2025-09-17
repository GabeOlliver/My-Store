import React from 'react';
import styles from './Skeleton.module.css';

function Skeleton({ width, height, style, className }) {
  // Combina a classe do módulo com qualquer outra classe passada via props
  const combinedClassName = `${styles.skeleton} ${className || ''}`;
  
  return (
    <div
      className={combinedClassName}
      style={{ width, height, ...style }}
    ></div>
  );
}

export default Skeleton;