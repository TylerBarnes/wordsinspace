import React from "react"
import { graphql, StaticQuery, Link } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

function Home() {
  return (
    <Layout>
      <SEO title="home" />
      <h3>Some example categories:</h3>
      
      <h4> <Link to="/entries/" state={{ param: 'pages' }}>pages</Link> • <Link to="/entries/" state={{ param: 'posts' }}>posts</Link></h4>
      
      <StaticQuery
        query={graphql`
          query {
            pages: allWpPage {
              nodes {
                id
                slug
                date
                title
                uri
              }
            }
            posts: allWpPost {
              nodes {
                id
                slug
                date
                title
                excerpt
                uri
              }
            }
          }
        `}
        render={data=>
          data.posts.nodes.map((node) => (
            <div key={node.id}>
              <Link to={node.slug}>
                {node.title}
              </Link>              
              <p>{node.date.slice(0,10)}</p>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))
        }
      />
    </Layout>
  )
}

export default Home