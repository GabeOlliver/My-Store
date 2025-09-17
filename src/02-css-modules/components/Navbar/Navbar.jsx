import React from 'react';
import styles from './Navbar.module.css';

function Navbar({ theme, onToggleTheme }) {
  const icon = theme === 'light' ? '🌙' : '☀️';
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        MyStore
      </div>
      <button 
        className={styles.themeToggleBtn}
        onClick={onToggleTheme}
        aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      >
        {icon}
      </button>
    </nav>
  );
}

export default Navbar;