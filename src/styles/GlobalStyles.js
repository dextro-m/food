import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

body {
    font-family: "Roboto", sans-serif;
    color: #fff;
    /* background-color: #060e2a; */
    background: linear-gradient(45deg, #060e2a, #0e013e);
    
}

* {
    
    margin: 0;
    padding: 0ex;
    box-sizing: border-box;
}

`

export default GlobalStyle
