import React from "react"
import { graphql } from "gatsby" 

import Layout from "../components/layout"
import List from "../components/list"
import TagsMenu from "../components/tagsMenu"
import Menu from "../components/menu"
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
      <div style={{
            display: `flex`,
            flexDirection: `row`,
            alignItems: `flex-start`, 
            justifyContent: `flex-start`, 
          }}
      >
        <List items={all}/>
        <CategoriesMenu categories={nonEmptyCategories} />
        <TagsMenu tags={nonEmptyTags} />
      </div>
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
        tags {
          nodes {
            slug
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
        tags {
          nodes {
            slug
          }
        }
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