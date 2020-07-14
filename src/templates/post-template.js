import React from "react"
import { graphql } from "gatsby"

export default function postViewer({ data }) {
  if(!data) return null

  const {title, date, content} = data.allWpPost.nodes[0]

  return (
    <div>
      <h1>{title}</h1>
      <h4>{date.slice(0,10)}</h4>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export const query = graphql`
  query getPosts($slug: String!) {
    allWpPost(filter: {slug: { eq: $slug }}) {
      nodes {
        slug
        title
        content
        date
          tags {
              nodes {
                  slug
              }
          }      
      }
    }
  }
`