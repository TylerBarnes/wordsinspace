import React from "react"
import { graphql, Link, StaticQuery} from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Projects() {
  return (
    <Layout>
    	<SEO title="Projects" />
    	<h3>All Projects</h3>
      <StaticQuery
	      query={graphql`
	        query {
	          projects: allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Project"}}}}}) {
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
	        data.projects.edges.map((edge) => (
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
