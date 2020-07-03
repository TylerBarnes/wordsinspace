import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Post({ data, location }) {
  const post = data.allWpPost.nodes[0]
  console.log('from tags?', location.state.fromTags)

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