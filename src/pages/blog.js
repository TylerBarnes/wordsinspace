import React from "react"
import { Link } from "gatsby" 

import Layout from "../components/layout"
import List from "../components/list"
import SEO from "../components/seo"

export default function Blog() {
  return (
    <Layout>
    	<SEO title="Blog" />
    	<Link to="/">Go back to the homepage</Link>
    	<h1>Blog</h1>
      <List />
    </Layout>
  )
}
