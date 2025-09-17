import styled, { css } from 'styled-components';

// Lógica de estilo para as variantes, usando a função 'css'
const variants = {
  solid: (theme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    &:hover {
      background-color: ${theme.colors.secondary};
    }
  `,
  outline: (theme) => css`
    background-color: transparent;
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `,
  ghost: (theme) => css`
    background-color: transparent;
    color: ${theme.colors.primary};
    &:hover {
      background-color: ${theme.colors.surface};
    }
  `,
};

// Criando o componente de botão estilizado
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 600;
  font-family: inherit;
  font-size: 1rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitionDuration};

  /* Aplica o estilo da variante baseado na prop 'variant' */
  ${({ theme, variant = 'solid' }) => variants[variant](theme)}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// O componente final é apenas o componente estilizado
export const Button = (props) => {
  return <StyledButton {...props} />;
};