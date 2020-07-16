import React from "react"
import { graphql } from "gatsby"

import Browser from "../layouts/browser"
import List from "../components/list"

export default function CategoryCollection({ data}) {

  const category = data.allWpCategory.nodes[0];
  const pages = category.pages.nodes;
  const posts = category.posts.nodes;

  return (
    <Browser>
      <div 
        style={{
          display: `flex`,
          flexDirection: `row`,
          alignItems: `flex-start`, 
          justifyContent: `flex-start`, 
        }}
        >
        <List items={[...pages, ...posts]}/>
      </div>
    </Browser>
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
            tags {
              nodes {
                slug
              }
            }
          }
        }
        pages {
          nodes {
            title
            slug
            date
            nodeType
            tags {
              nodes {
                slug
              }
            }
          }
        }
      }
    }
  }
`