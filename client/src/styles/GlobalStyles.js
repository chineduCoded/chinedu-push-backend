import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700;800;900&display=swap');

:root {
    --black: #09090c;
    --grey: #a4b2bc;
    --white: #fff;
    --background: rgba(137, 171, 245, 0.37);
}

* > * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Poppins", sans-serif;
}

`