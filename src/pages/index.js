import React from "react"
import { Link, graphql } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="home" />
      <Link to="/page-2/">Go to page 2</Link>
      <h1>Posts</h1>
      {data.allWpPost.nodes.map((node) => (
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
    allWpPost(sort: { 
        fields: [date] 
        order: DESC }
        ){
        nodes {
            title
            excerpt
            slug
        }
    }
  }
`