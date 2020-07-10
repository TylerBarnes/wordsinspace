import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Menu from "../components/menu"

export default function Post({ data }) {
  if(!data) return null
 
  const post = data.allWpPost.nodes[0]

  return (
    <Layout>
      <Menu />
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