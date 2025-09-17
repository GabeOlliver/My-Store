import React from 'react';

function Navbar({ theme, onToggleTheme }) {
  const icon = theme === 'light' ? '🌙' : '☀️';
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 shadow-md bg-surface-light dark:bg-surface-dark transition-colors duration-200">
      <div className="text-2xl font-bold text-ink dark:text-sand">
        MyStore
      </div>
      <button 
        className="px-3 py-2 text-xl rounded-lg text-ink dark:text-sand hover:bg-sand dark:hover:bg-background-dark transition-colors duration-200"
        onClick={onToggleTheme}
        aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      >
        {icon}
      </button>
    </nav>
  );
}

export default Navbar;