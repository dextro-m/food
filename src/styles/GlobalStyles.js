import { createGlobalStyle } from "styled-components"
import "@fontsource/roboto"

const GlobalStyle = createGlobalStyle`

body {
    font-family: "Roboto", sans-serif;
    color: #000;
    
    background: #fff;
    
}

* {
    margin: 0;
    padding: 0ex;
    box-sizing: border-box;
}

`

export default GlobalStyle
