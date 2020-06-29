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
					    nodes {
					      excerpt
			          slug
			          link
			          title
					    }
					  }
	        }
	      `}

	      render={data=>
	        data.allWpPost.nodes.map((node) => (
	          <div key={node.slug}>
	            <Link to={`/allPosts/${node.slug}`}>
	              <p>{node.title}</p>
	            </Link>
	            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
	          </div>
	        ))
	      }
	    />
    	<Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
