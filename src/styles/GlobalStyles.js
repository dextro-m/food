import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
/*
html {

    h1 { font-size: 2rem}
    h2 { font-size: 1.8rem}
    h3 { font-size: 1.5rem}
    p { font-size: 1rem}

@media (min-width: 768px) {
    h1 { font-size: 2.6rem}
    h2 { font-size: 2.4rem}
    h3 { font-size: 1.75rem}
    p  { font-size: 1.1rem} 
    }

@media (min-width: 1200px) {
    h1 { font-size: 3rem}
    h2 { font-size: 2.8rem}
    h3 { font-size: 2rem}
    p  { font-size: 1.15rem}
    }
}
*/

body {
    font-family: "Roboto", sans-serif;
    color: #fff;
    /* background-color: #060c21; */
    background: linear-gradient(45deg, #060c21, #0d0139);
}

* {
    
    margin: 0;
    padding: 0ex;
    box-sizing: border-box;
}

`

export default GlobalStyle
