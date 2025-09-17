import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: background-color ${({ theme }) => theme.transitionDuration};
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const ThemeButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color ${({ theme }) => theme.transitionDuration};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export function Navbar({ theme, onToggleTheme }) {
  const icon = theme === 'light' ? '🌙' : '☀️';

  return (
    <NavContainer>
      <Logo>MyStore</Logo>
      <ThemeButton
        onClick={onToggleTheme}
        aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      >
        {icon}
      </ThemeButton>
    </NavContainer>
  );
}