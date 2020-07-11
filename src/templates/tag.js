import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import List from "../components/list"
import Menu from "../components/menu"

export default function Tag({ data, location}) {

  const tag = data.allWpTag.nodes[0];
  const pages = tag.pages.nodes;
  const posts = tag.posts.nodes;
  const all = [...pages, ...posts];
  
  if(!location) return null
  
  return (
    <Layout>
      <Menu />
      <div style={{
            display: `flex`,
            flexDirection: `row`,
            alignItems: `flex-start`, 
            justifyContent: `flex-start`, 
          }}
      >
        <List items={all} fromMain={location.state ? location.state.fromMain : false}/>
        <aside  
          style={{
          alignSelf: 'flex-start',
          textAlign: 'left',
          width: `40%`,
          fontSize: '0.9rem',
         }}>
            Tag
            <div style={{
              marginBottom: '2vh',
              color: '#ff5236',
              fontWeight: '600',
              textTransform: 'uppercase'
            }}>{tag.name}</div>
          <div><Link to="/" >back</Link></div>
        </aside>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getTag($slug: String!) {
    allWpTag(filter: {slug: { eq: $slug }}) {
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