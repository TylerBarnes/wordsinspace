import React from "react"
import { Link } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

function Home() {
  return (
    <Layout>
      <SEO title="home" />
      <h3>Some example categories:</h3>
      
      <h4> <Link to="/entries/" state={{ param: 'pages' }}>pages</Link> • <Link to="/entries/" state={{ param: 'posts' }}>posts</Link></h4>

    </Layout>
  )
}

export default Home