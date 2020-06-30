import React from "react"
import { graphql, Link, StaticQuery} from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function allPages() {
  return (
    <Layout>
    	<SEO title="Pages" />
    	<h3>All Pages</h3>
      <StaticQuery
	      query={graphql`
	        query {
	          allWpPage {
					    edges {
					      node {
					        slug
					        title
					      }
					    }
					  }
	        }
	      `}
	      render={data=>
	        data.allWpPage.edges.map((edge) => (
	          <div key={edge.node.slug}>
	            <Link to={`/allPages/${edge.node.slug}`}>
	              <p>{edge.node.title}</p>
	            </Link>
	          </div>
	        ))
	      }
	    />
    	<Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
