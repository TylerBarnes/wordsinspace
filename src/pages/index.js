import React from "react"
import { Link } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

function Home() {
  return (
    <Layout>
      <SEO title="home" />
      <h3>Some example categories:</h3>
      <Link to="/publications/"><h4>publications</h4></Link>
      <Link to="/presentations/"><h4>presentations</h4></Link>
      <Link to="/projects/"><h4>projects</h4></Link>
      <Link to="/teaching/"><h4>teaching</h4></Link>

			<hr/>
      <h3>Some example pages:</h3>
      <Link to="/about/"><h4>about</h4></Link>
    </Layout>
  )
}

export default Home