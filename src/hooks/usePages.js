import { useStaticQuery, graphql } from "gatsby"

export const usePages = () => {
  const { allWpPage } = useStaticQuery(
    graphql`
      query {
        allWpPage {
          nodes {
            slug
            title
            date
            content
            uri
            categories {
              nodes {
                name
              }
            }
            tags {
              nodes {
                slug
              }
            }
          }
        }
      }
    `
  )
  return allWpPage.nodes
}

            // featuredImage {
            //  node {
            //    localFile {
            //      childImageSharp {
            //        fluid {
            //          ...GatsbyImageSharpFluid
            //        }
            //      }
            //    }
            //  }
            // }