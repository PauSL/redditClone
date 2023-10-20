import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    &::-webkit-scrollbar{
        width: 2rem;
    }
}

body {
    font-family: 'Jost', sans-serif;
}

`


export default GlobalStyles;    