import React from "react"
import { Link, graphql } from "gatsby"

import Reader from "../layouts/reader"

export default function pageTemplate({ data }) {
  if(!data) return null

  const {title, date, content, related_pages} = data.allWpPage.nodes[0]

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
          {date.slice(0,4)}
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />

        <div 
          style={{
            margin: '2vh 0',
            fontSize: '1rem',
            opacity: '0.5'
          }}>
          <h3>Related Pages</h3>
          {related_pages?.relatedpages?.map(page=> (
            <div key={page.id} >
              <Link to={page.uri}>{page.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </Reader>
  )
}

export const query = graphql`
  query getPage($id: String!) {
    allWpPage(filter: {id: { eq: $id }}) {
      nodes {
        id
        title
        content
        date
        uri
        slug
        related_pages {
          relatedpages {
            ... on WpPage {
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