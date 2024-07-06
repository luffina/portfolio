import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background: #f4f4f4;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
