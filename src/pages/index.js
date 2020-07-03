import React, {useState} from "react"
import { graphql, Link } from "gatsby" 

import Layout from "../components/layout"
import List from "../components/list"
import Tags from "../components/tags"
import SEO from "../components/seo"

export default function Home({data}) {
  const pages = data.pages.nodes;
  const posts = data.posts.nodes;
  const tags = data.tags.nodes;
  const all = [...pages, ...posts];

  const [selectedTag, setSelectedTag] = useState("");
  const nonEmptyTags = data.tags.nodes.filter(node => node.posts.nodes.length > 0)
  
  const [entries, setEntries] = useState([]);

  function handleChange(e) {
    e.preventDefault()
    setSelectedTag(e.target.value)
    setEntries(tags.filter( tag => tag.name === selectedTag)) 
  }

  function handleClear(e) {
    e.preventDefault()
    setSelectedTag('');
    setEntries([]);
  }

  return (
    <Layout>
      <SEO title="home" />
      <List items={entries[0] && entries[0].posts.nodes.length > 0 ? entries[0].posts.nodes : all}/>
      <Tags tags={nonEmptyTags} doChange={handleChange} selectedTag={selectedTag} doClear={handleClear} />
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
        posts {
          nodes {
            title
            slug
            title
            link
            date
          }
        }
      }
    }
  }
`