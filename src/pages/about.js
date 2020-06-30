import React from "react"
import { Link } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About() {
  return (
    <Layout>
    	<SEO title="About" />
    	<h3>About</h3>
    	<Link to="/">back</Link>
    </Layout>
  )
}
