import React from "react"
import { Link, graphql } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About({ data }) {
  return (
    <Layout>
    	<SEO title="About" />
    	<h3>About</h3>
      (GraphQL query should go here)
    	<Link to="/">back</Link>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query {
//     wpCategory {
//       name
//       nodeType
//       count
//       posts {
//         nodes {
//           content
//           slug
//           excerpt
//           title
//         }
//       }
//     }
//   }
// `