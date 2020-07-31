import React from "react"
import { graphql } from "gatsby"

import Reader from "../layouts/reader"

export default function postTemplate({ data }) {
  if(!data) return null

  const {title, date, content, related_posts} = data.allWpPost.nodes[0]
  return (
    <Reader>
      <div 
        style={{
          width: '70vw',
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
        <div 
          style={{
            margin: '1vh 0',
            fontSize: '1rem',
            lineHeight: '1rem',
          }}>
          {date && date.slice(0,4)}
        </div>
        
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div 
          style={{
            margin: '2vh 0',
            fontSize: '1rem',
            opacity: '0.5'
          }}>
          {related_posts?.relatedPosts?.map(page=> (
            <div>
              <h3>Related Pages</h3>
              <div key={page.id} >
                <Link to={page.uri}>{page.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reader>
  )
}


export const query = graphql`
  query getPost($id: String!) {
    allWpPost(filter: {id: { eq: $id }}) {
      nodes {
        id
        title
        content
        date
        uri
        slug
        related_posts {
          relatedPosts {
            ... on WpPost {
              id
              uri
              title
            }
          }
        }
      }
    }
  }
`
