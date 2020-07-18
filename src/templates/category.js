import React from "react"
import { graphql } from "gatsby"

import Browser from "../layouts/browser"
import List from "../components/list"
import {searchContext} from '../context/provider'

export default function CategoryTemplate({data}) {
  if(!data) return null
    
  const category = data.allWpCategory.nodes[0];
  const pages = category.pages.nodes;
  const posts = category.posts.nodes;
  const items=[...pages, ...posts]

  return (
    <searchContext.Consumer>
      {context => (
        <React.Fragment>
          <Browser>
            <List 
              searchInfoVisible={context.searchInfoVisible} 
              searchTerm={context.searchTerm}
              items={items}
              />
          </Browser>
        </React.Fragment>
      )}
    </searchContext.Consumer>
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
            content
            excerpt
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
            content
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