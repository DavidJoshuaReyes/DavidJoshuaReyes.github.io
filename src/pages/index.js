import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Greetings from "../components/section";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Greetings greeting="Well, hello there, my name is David."/>
  </Layout>
)

export default IndexPage
