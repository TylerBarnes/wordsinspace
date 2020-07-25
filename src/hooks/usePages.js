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