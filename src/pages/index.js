import React from "react"
import { graphql } from "gatsby" 

import Layout from "../components/layout"
import List from "../components/list"
import TagsMenu from "../components/tagsMenu"
import SEO from "../components/seo"

export default function Home({data}) {
  const pages = data.pages.nodes;
  const posts = data.posts.nodes;
  const all = [...pages, ...posts];
  const nonEmptyTags = data.tags.nodes.filter(node => (node.pages.nodes.length > 0 || node.posts.nodes.length > 0))
  console.log(nonEmptyTags.length)

  return (
    <Layout>
      <SEO title="home" />
      <List items={all}/>
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
    tags: allWpTag {
      nodes {
        name
        slug
        posts {
          nodes {
            title
            slug
            link
            date
          }
        }
        pages {
          nodes {
            title
            slug
            link
            date
          }
        }
      }
    }
  }
`