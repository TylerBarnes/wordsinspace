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

			<hr/>
      <Link to="/teaching/"><h4>teaching</h4></Link>
      <Link to="/blog/"><h4>blog</h4></Link>
      <Link to="/uncategorized/"><h4>uncategorized</h4></Link>
      <Link to="/publications/"><h4>publications</h4></Link>
      <Link to="/research/"><h4>research</h4></Link>
      <Link to="/talks/"><h4>talks</h4></Link>
      <Link to="/presentations/"><h4>presentations</h4></Link>
      <Link to="/projects/"><h4>projects</h4></Link>

			<hr/>
      <Link to="/about/"><h4>about</h4></Link>
    </Layout>
  )
}

export default Home