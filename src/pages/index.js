import React from "react"
import { Link } from "gatsby" 

import Layout from "../components/layout"
import Menu from "../components/menu"
import SEO from "../components/seo"

function Home() {
  return (
    <Layout>
      <SEO title="home" />
      <h3>Pages vs Posts</h3>
      <h4> <Link to="/pages/">pages</Link></h4>
      <h4><Link to="/posts/">posts</Link></h4>

      <h3>Menu</h3>
      <Menu />
    </Layout>
  )
}

export default Home