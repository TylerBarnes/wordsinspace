import React from "react"
import { Link } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

function Home() {
  return (
    <Layout>
      <SEO title="home" />
      <Link to="/allPosts/"><h4>All posts</h4></Link>
      <Link to="/allPages/"><h4>All pages</h4></Link>
      <Link to="/about/"><h4>about</h4></Link>
    </Layout>
  )
}

export default Home