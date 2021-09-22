import * as React from "react"
import GlobalStyle from "../styles/GlobalStyles"
import Header from "./header"
import Footer from "./footer"

// Required for React Bootstrap Carousel
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
