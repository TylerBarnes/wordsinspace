import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function pageViewer({ data }) {
  if(!data) return null

  const {title, date, content} = data.allWpPage.nodes[0]

  return (
    <Layout>
      <h3>Viewer</h3>
      <div>
        <h1>{title}</h1>
        <h4>{date.slice(0,10)}</h4>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getPages($slug: String!) {
    allWpPage(filter: {slug: { eq: $slug }}) {
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