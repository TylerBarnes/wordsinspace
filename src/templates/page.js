import React from "react"
import { graphql } from "gatsby"

import Reader from "../layouts/reader"

export default function pageViewer({ data }) {
  if(!data) return null

  const {title, date, content} = data.allWpPage.nodes[0]

  return (
    <Reader>

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
    </Reader>
  )
}

export const query = graphql`
  query getPage($slug: String!) {
    allWpPage(filter: {slug: { eq: $slug }}) {
      nodes {
        slug
        title
        content
        date
      }
    }
  }
`