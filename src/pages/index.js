import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Test from "../components/Test"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Test />
  </Layout>
)

export default IndexPage
