import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --deep-blue: #000118;
    --electric-orange: #ff370d;
    --metallic-silver: #BDC3C7;
    --text-light: #ffffff;
    --text-dark: #34495E;
    --text-electric-green: #00FF00;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background: var(--deep-blue);
    color: var(--text-light);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--electric-orange);
  }

  a {
    color: var(--electric-orange);
    text-decoration: none;

    &:hover {
      color: var(--metallic-silver);
    }
  }

  button {
    background-color: var(--electric-orange);
    color: var(--deep-blue);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--metallic-silver);
    }
  }
`;
