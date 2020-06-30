import React from "react"
import { graphql, Link, StaticQuery} from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function AllPosts() {
  return (
    <Layout>
    	<SEO title="Posts" />
    	<h3>All Posts</h3>
      <StaticQuery
	      query={graphql`
	        query {
	          allWpPost {
					    edges {
					      node {
					        excerpt
					        slug
					        title
					        date
					      }
					    }
					  }
	        }
	      `}
	      render={data=>
	        data.allWpPost.edges.map((edge) => (
	          <div key={edge.node.slug}>
	            <Link to={`/allPosts/${edge.node.slug}`}>
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
