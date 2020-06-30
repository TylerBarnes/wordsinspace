import React from "react"
import { graphql, Link, StaticQuery} from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Blog() {
  return (
    <Layout>
    	<SEO title="Blog" />
    	<h3>Blog</h3>
      <StaticQuery
	      query={graphql`
	        query {
	          blog: allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Blog"}}}}}) {
					    totalCount
					    edges {
					      node {
					        slug
					        date
					        title
					        link
					        categories {
					          nodes {
					            name
					          }
					        }
					        content
					        excerpt
					      }
					    }
					  }
	        }
	      `}
	      render={data=>
	        data.blog.edges.map((edge) => (
	          <div key={edge.node.slug}>
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
