import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Herobg from "../components/Hero"
import About from "../components/About"
import Gallery from "../components/Gallery"
import Menu from "../components/Menu"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Herobg />
    <About />
    <Menu />
    <Gallery />
  </Layout>
)

export default IndexPage
