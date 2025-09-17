import React from 'react';

function Button({ children, variant = 'solid', ...props }) {
  // Classes base, compartilhadas por todas as variantes
  const baseClasses = "w-full px-4 py-2 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // Classes específicas para cada variante
  const variantClasses = {
    solid: 'bg-primary text-white hover:bg-secondary',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-surface-light dark:hover:bg-surface-dark',
  };
  
  const className = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;