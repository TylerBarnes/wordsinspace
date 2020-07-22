import React from "react"
import { graphql } from "gatsby"

import {useCategories} from "../hooks/useCategories"
import {useTags} from "../hooks/useTags"

import Browser from "../layouts/browser"
import SEO from "../components/seo"
import Filters from "../components/filters"
import List from "../components/list"

export default function CategoryTemplate({data}) {
    
  const category = data.allWpCategory.nodes[0];
  const pages = category.pages.nodes;
  const posts = category.posts.nodes;
  const items=[...pages, ...posts]
  const categories = useCategories();
  const tags = useTags();

  return (
    <Browser>
      <SEO title={category.name} />
      <List items={items} />
      <Filters categories={categories} tags={tags} />
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