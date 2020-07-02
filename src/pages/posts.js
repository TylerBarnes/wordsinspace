import React from "react"
import { graphql, Link, StaticQuery} from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Posts({}) {
  return (
    <Layout>
    	<SEO title="Posts" />
    	<h3>Posts</h3>
      <StaticQuery
	      query={graphql`
          query {
            posts: allWpPost(sort: { fields: [date] , order: [DESC] }) {
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
	            <Link to={`../${node.slug}`}>
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
