import React from "react"
import { StaticQuery, graphql, Link } from "gatsby" 


export default function List() {
  return (

    <StaticQuery
      query={graphql`
        query {
          allWpPost(sort: { fields: [date] }) {
              nodes {
                  title
                  excerpt
                  slug
              }
          }
        }
      `}

      render={data=>
        data.allWpPost.nodes.map((node) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <p>{node.title}</p>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))
      }
    />
  )
}
