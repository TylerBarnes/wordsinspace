import React from "react"
import { Link, graphql } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About({ data }) {
  return (
    <Layout>
    	<SEO title="About" />
    	<Link to="/">Go back to the homepage</Link>
    	<h1>About</h1>
      {data.wpCategory.posts.nodes.map((node) => (
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
    wpCategory {
      name
      nodeType
      count
      posts {
        nodes {
          content
          slug
          excerpt
          title
        }
      }
    }
  }
`