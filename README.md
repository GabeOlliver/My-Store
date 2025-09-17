# Comparativo de Estilização em React

Projeto que implementa a mesma interface com 4 técnicas de estilização diferentes em React para fins de comparação.

## Abordagens Implementadas

* **01-css-global**: CSS Global com Variáveis.
* **02-css-modules**: CSS Modules para estilos com escopo local.
* **03-tailwind**: Tailwind CSS (Utility-First).
* **04-styled-components**: Styled Components (CSS-in-JS).

## Como Rodar

1.  **Instalar dependências:**
    ```bash
    npm install
    ```

2.  **Iniciar o servidor:**
    ```bash
    npm run dev
    ```

## Como Alternar as Versões

Edite o arquivo `src/main.jsx` para importar e renderizar o componente da versão desejada:

* `CssGlobalApp`
* `CssModulesApp`
* `TailwindApp`
* `StyledComponentsApp`

**Exemplo para a versão CSS Global:**
```jsx
// src/main.jsx
import CssGlobalApp from './01-css-global/CssGlobalApp';

// ...
root.render(
  <React.StrictMode>
    <CssGlobalApp />
  </React.StrictMode>
);
