import { useStaticQuery, graphql } from "gatsby"

export const usePages = () => {
  const { allWpPage } = useStaticQuery(
    graphql`
      query {
        allWpPage(limit: 10) {
          nodes {
            slug
            title
            date
            nodeType
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