import React from 'react';
import './Navbar.css';

function Navbar({ theme, onToggleTheme }) {
  const icon = theme === 'light' ? '🌙' : '☀️';
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        MyStore
      </div>
      <div>
        {/* Futuramente aqui terá o badge do carrinho */}
      </div>
      <button 
        className="theme-toggle-btn"
        onClick={onToggleTheme}
        aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      >
        {icon}
      </button>
    </nav>
  );
}

export default Navbar;