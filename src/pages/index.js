import React from "react"
import { graphql } from "gatsby" 

import Layout from "../components/layout"
import List from "../components/list"
import TagsMenu from "../components/tagsMenu"
import CategoriesMenu from "../components/categoriesMenu"
import SEO from "../components/seo"

export default function Home({data}) {
  const pages = data.pages.nodes;
  const posts = data.posts.nodes;
  const all = [...pages, ...posts];

  const nonEmptyTags = data.tags.nodes.filter(node => (node.pages.nodes.length > 0 || node.posts.nodes.length > 0))
  const nonEmptyCategories = data.categories.nodes.filter(node => (node.pages.nodes.length > 0 || node.posts.nodes.length > 0))

  return (
    <Layout>
      <SEO title="home" />
      <List items={all}/>
      <CategoriesMenu categories={nonEmptyCategories} />
      <TagsMenu tags={nonEmptyTags} />
    </Layout>
  )
}

export const query = graphql`
  query {
    pages: allWpPage {
      nodes {
        slug
        title
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
        date
        nodeType
      }
    }
    tags: allWpTag {
      nodes {
        name
        slug
        posts {
          nodes {
            title
            slug
            date
          }
        }
        pages {
          nodes {
            title
            slug
            date
          }
        }
      }
    }
    categories: allWpCategory {
      nodes {
        name
        slug
        posts {
          nodes {
            title
            slug
            date
          }
        }
        pages {
          nodes {
            title
            slug
            date
          }
        }
      }
    }
  }
`