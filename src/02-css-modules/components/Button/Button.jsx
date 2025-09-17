import React from 'react';
import styles from './Button.module.css';

function Button({ children, variant = 'solid', ...props }) {
  const variantClass = styles[variant]; // Acessa a classe dinamicamente: styles['solid'], styles['outline']...
  const className = `${styles.btn} ${variantClass}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;