import React from "react"
import { graphql, Link, StaticQuery} from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Presentations({location}) {
  return (
    <Layout>
    	<SEO title="Presentations" />
    	<h3>Presentations {location.state.param}</h3>
      <StaticQuery
	      query={graphql`
	        query {
	          pages: allWpPage(filter: {categories: {nodes: {elemMatch: {name: {eq: "Presentation"}}}}}) {
					    totalCount
					    edges {
					      node {
					        slug
					        date
					        title
					      }
					    }
					  }
					  posts: allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Presentation"}}}}}) {
					    totalCount
					    edges {
					      node {
					        slug
					        date
					        title
					      }
					    }
					  }
	        }
	      `}
	      render={data=>
	        data[location.state.param].edges.map((edge) => (
	          <div key={edge.node.slug}>
	            <Link to={edge.node.slug}>
	            	{edge.node.title}
	            </Link>
	            <p>{edge.node.date.slice(0,10)}</p>
	          </div>
	        ))
	      }
	    />
    	<Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
