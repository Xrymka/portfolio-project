import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-width: 360px;
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    line-height: 1.2;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  a {
    color: ${theme.colors.font};
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    color: ${theme.colors.font};
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  section {
    padding: 100px 0;

    @media ${theme.breakpoints.mobile} {
      padding: 80px 0;
    }
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }

  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
  }

  h3 {
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  p {
    font-size: 14px;
    line-height: 1.4;
    font-weight: 400;
  }
`