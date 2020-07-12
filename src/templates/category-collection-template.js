import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import List from "../components/list"
import Menu from "../components/menu"

export default function CategoryCollection({ data, location}) {

  const category = data.allWpCategory.nodes[0];
  const pages = category.pages.nodes;
  const posts = category.posts.nodes;
  const all = [...pages, ...posts];

  if(!location) return null
  
  return (
    <Layout>
      <h5>Collection</h5>
      <div 
        style={{
          display: `flex`,
          flexDirection: `row`,
          alignItems: `flex-start`, 
          justifyContent: `flex-start`, 
        }}
        >
        <List items={all} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getCategory($slug: String!) {
    allWpCategory(filter: {slug: { eq: $slug }}) {
      nodes {
        name
        slug
        posts {
          nodes {
            title
            slug
            date
            nodeType
          }
        }
        pages {
          nodes {
            title
            slug
            date
            nodeType
          }
        }
      }
    }
  }
`