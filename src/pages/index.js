import React from "react"
import { Link, StaticQuery } from "gatsby" 

import Layout from "../components/layout"
import Menu from "../components/menu"
import SEO from "../components/seo"

export default function Home({data}) {
  const pages = data.pages.nodes;
  const posts = data.posts.nodes;
  const merged = [...pages, ...posts];

  return (
    <Layout>
      <SEO title="home" />
      {
        merged.map((node, index) => (
          <li key={index} style={{
            listStyle: 'none',
            padding: '5px',
            display: 'flex row',
            border: '1px solid #eee'
          }}>
            <Link to={node.slug}> {node.title}</Link>              
            
            <div 
              style={{
                margin: '0 0.2vw', 
                fontSize: '0.8rem'}}> <em>{node.nodeType} </em> </div>
            
            <div 
              style={{
                margin: '0 0.2vw', 
                fontSize: '0.8rem', 
                textAlign: 'right',
              }}> {node.childPages && node.childPages.nodes.length > 0 ? node.childPages.nodes.length : null}</div>

            <div style={{
              margin: '0 0.2vw', 
              fontSize: '0.8rem',
            }}> {node.date.slice(0,10)} </div>
          </li>
        ))
      }
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
  }
`