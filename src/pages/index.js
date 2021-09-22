import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Herobg from "../components/Hero"
import About from "../components/about"
import Gallery from "../components/Gallery"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Herobg />
    <About />
    <Gallery />
  </Layout>
)

export default IndexPage
