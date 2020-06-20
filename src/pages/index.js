import React from "react"
import { Link, graphql } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

function Home() {
  return (
    <Layout>
      <SEO title="home" />
      <h4>WP categories</h4>
      <Link to="/blog/"><h5>blog</h5></Link>
 
      <h4>About page</h4>
      <Link to="/about/"><h5>about</h5></Link>
    </Layout>
  )
}

export default Home