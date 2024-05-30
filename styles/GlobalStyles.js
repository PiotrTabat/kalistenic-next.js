import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --deep-blue: #000118;
        --dark-blue: #00091c;
        --green: #1e7e04;
        --dark-red: #8b0000;
        --dark-green: #015c01;
        --electric-red: #FF0000;
        --electric-orange: #FF4500;
        --electric-yellow: #FFD700;
        --electric-green: #00FF00;
        --electric-blue: #007FFF;
        --metallic-silver: #BDC3C7;
        --text-light: #ffffff;
        --text-dark: #34495E;
        --text-electric-green: #00FF00;
        --text-electric-blue: #007FFF;
        --text-electric-orange: #FF4500;
        --dark-gray: rgba(0, 0, 0, 0.67);
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        background: var(--deep-blue);
        color: var(--text-light);
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--electric-red);
    }

    a {
        color: var(--text-light);
        text-decoration: none;
        transition: color 0.3s, transform 0.3s;

        &:hover {
            color: var(--metallic-silver);
            transform: scale(1.05);
        }

        &:active {
            transform: scale(0.95);
        }

        &:focus {
            outline: none;
        }
    }
`;
