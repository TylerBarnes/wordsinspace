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
					    edges {
					      node {
					      	id
					        slug
					        date
					        title
					      }
					    }
					  }
					  posts: allWpPost {
					    edges {
					      node {
					      	id
					        slug
					        date
					        title
					        excerpt
					      }
					    }
					  }
	        }
	      `}
	      render={data=>
	        data[location.state.param].edges.map((edge) => (
	          <div key={edge.node.id}>
	            <Link to={edge.node.slug}>
	            	{edge.node.title}
	            </Link>
	            <p>{edge.node.date.slice(0,10)}</p>
	            <div dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
	          </div>
	        ))
	      }
	    />
    	<Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
