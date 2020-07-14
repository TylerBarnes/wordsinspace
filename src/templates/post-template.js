import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function postViewer({ data }) {
  if(!data) return null

  const {title, date, content} = data.allWpPost.nodes[0]

  return (
    <Layout>

      <div style={{
        width: '60vw',
        margin: '0 auto',
      }}>
        <div 
          style={{
            fontSize: '4rem',
            lineHeight: '4rem',
            margin: '1vh 0'
          }}>
          {title}
        </div>
        
        <div style={{
          margin: '1vh 0',
          fontSize: '2rem',
          lineHeight: '2rem',
        }}>
          {date.slice(0,10)}
        </div>
        
        <div dangerouslySetInnerHTML={{ __html: content }} />
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