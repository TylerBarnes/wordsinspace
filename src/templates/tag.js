import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Tag({ data }) {
  const tag = data.allWpTag.nodes[0]
  return (
    <Layout>
        <h2>here is a tag!!</h2>
        <h1>{tag.name}</h1>
    </Layout>
  )
}

export const query = graphql`
  query getTag($slug: String!) {
    allWpTag(filter: {slug: { eq: $slug }}) {
      nodes {
        name
        slug
        posts {
          nodes {
            title
            slug
            link
            date
          }
        }
      }
    }
  }
`