// Definições base dos tokens, para não repetir
const baseTokens = {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  shadows: {
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0,0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: '8px',
  transitionDuration: '200ms',
};

// Tema claro
export const lightTheme = {
  ...baseTokens,
  colors: {
    background: '#dcc9a9',
    text: '#2a2a2a',
    primary: '#b83a2d',
    secondary: '#4e6851',
    surface: '#c9b696',
    white: '#ffffff',
  },
};

// Tema escuro
export const darkTheme = {
  ...baseTokens,
  colors: {
    background: '#1c1c1c',
    text: '#dcc9a9',
    primary: '#b83a2d',
    secondary: '#4e6851',
    surface: '#2f2f2f',
    white: '#ffffff',
  },
  // Sobrescrevendo sombras para o tema escuro
  shadows: {
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -2px rgba(0, 0, 0, 0.25)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.25), 0 4px 6px -4px rgba(0, 0, 0, 0.25)',
  }
};