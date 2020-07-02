import React from "react"
import { graphql, Link } from "gatsby" 

import Layout from "../components/layout"
import List from "../components/list"
import Tags from "../components/tags"
import SEO from "../components/seo"

export default function Home({data}) {
  const pages = data.pages.nodes;
  const posts = data.posts.nodes;
  const merged = [...pages, ...posts];

  return (
    <Layout>
      <SEO title="home" />
      <Tags />
      <List merged={merged}/>
    </Layout>
  )
}

export const query = graphql`
  query {
    pages: allWpPage {
      nodes {
        slug
        title
        link
        date
        nodeType
        childPages {
          nodes {
            title
            nodeType
          }
        }
      }
    }
    posts: allWpPost {
      nodes {
        slug
        title
        link
        date
        nodeType
      }
    }
  }
`