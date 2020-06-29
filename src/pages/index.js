import React from "react"
import { Link } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

function Home() {
  return (
    <Layout>
      <SEO title="home" />
      <Link to="/allPosts/"><h5>All posts</h5></Link>
      <Link to="/about/"><h5>about</h5></Link>
    </Layout>
  )
}

export default Home