import React from "react"
import { Link } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

function Home() {
  return (
    <Layout>
      <SEO title="home" />
      <h3>Some example categories:</h3>
      
      <h4> presentations:  <Link to="/presentations/" state={{ param: 'pages' }}>pages</Link> • <Link to="/presentations/" state={{ param: 'posts' }}>posts</Link></h4>

      <h4> publications: <Link to="/publications/" state={{ param: 'pages' }}>pages</Link></h4>

      <h4> projects: <Link to="/projects/" state={{ param: 'pages' }}>pages</Link></h4>
      
      <h4> teaching: <Link to="/teaching/" state={{ param: 'pages' }}>pages</Link> • <Link to="/teaching/" state={{ param: 'posts' }}>posts</Link></h4>

    </Layout>
  )
}

export default Home