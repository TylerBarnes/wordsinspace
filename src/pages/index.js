import React from "react"
import { Link } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

function Home() {
  return (
    <Layout>
      <SEO title="home" />
      
      <h4> <Link to="/pages/">pages</Link></h4>
      <h4><Link to="/posts/">posts</Link></h4>

    </Layout>
  )
}

export default Home