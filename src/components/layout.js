import * as React from "react"
import GlobalStyle from "../styles/GlobalStyles"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
