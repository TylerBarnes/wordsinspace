import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Post({ data }) {
  const post = data.allWpPost.nodes[0]
  
  if(!data) return null

  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getPosts($slug: String!) {
    allWpPost(filter: {slug: { eq: $slug }}) {
      nodes {
        slug
        title
        content
      }
    }
  }
`