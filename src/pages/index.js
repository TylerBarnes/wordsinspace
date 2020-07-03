import React, {useState} from "react"
import { graphql, Link } from "gatsby" 

import Layout from "../components/layout"
import List from "../components/list"
import Tags from "../components/tags"
import SEO from "../components/seo"

export default function Home({data}) {
  const pages = data.pages.nodes;
  const posts = data.posts.nodes;
  const all = [...pages, ...posts];

  const tags = data.tags.nodes;
  const nonEmptyTags = data.tags.nodes.filter(node => node.posts.nodes.length > 0)

  return (
    <Layout>
      <SEO title="home" />
      <List items={all}/>
      <Tags tags={nonEmptyTags} />
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
      }
    }
  }
`