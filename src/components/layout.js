import * as React from "react"
import GlobalStyle from "../styles/GlobalStyles"
import Header from "./Header"
// import Doggy from "./Doggy"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout

// <Doggy />
