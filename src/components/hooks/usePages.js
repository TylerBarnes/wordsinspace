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
            nodeType
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    `
  )
  return allWpPage.nodes
}