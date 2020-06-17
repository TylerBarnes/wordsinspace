import React from "react"
import { Link, graphql } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function SecondPage({ data }) {
  return (
    <Layout>
    	<SEO title="Page two" />
    	<Link to="/">Go back to the homepage</Link>
    	<h1>Pages</h1>
      {data.allWpPage.nodes.map((node) => (
        <div key={node.slug}>
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPage(sort: { fields: [date] }) {
        nodes {
            title
            slug

        }
    }
  }
`