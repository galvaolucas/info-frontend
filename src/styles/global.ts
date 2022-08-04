import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #ffffff;
        --green-400: #40B25C;
        --gray-900: #1C1C1C;
        --gray-600: #999A9B;
        --red-500: #F3151B;
        --gray-200: #E9EBEE;
        --green-600: #1E9631;
        --green-100: #A3F9B9;
        --pink-100: #FFCAE0;
        --red-600: #E20F15;
        --gray-700: #737375;
        --background: #DADCDE;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


`;