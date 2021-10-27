import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        padding: 0;
        margin: 0;
        background-color: #F6F6F6;
        font-family: 'Roboto', sans-serif;
    }

    h1 {
        margin: 0;
    }
`;