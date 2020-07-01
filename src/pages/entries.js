import React from "react"
import { graphql, Link, StaticQuery} from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Entries({location}) {
  return (
    <Layout>
    	<SEO title="Entries" />
    	<h3>Entries - {location.state.param}</h3>
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
	        data[location.state.param].nodes.map((node) => (
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
    	<Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
