import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

:root {
    --black: #09090c;
    --grey: #a4b2bc;
    --white: #fff;
    --background: rgba(137, 171, 245, 0.37);
}

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    overflow: hidden;
}

body {
    background: ${({theme}) => theme.bg2};
    color: ${({theme}) => theme.text};
    font-family: "Poppins", sans-serif;
    letter-spacing: .6px;
    transition: all 0.5s linear;
}

`