import { useStaticQuery, graphql } from "gatsby"

export const useCategories = () => {
  const { allWpCategory } = useStaticQuery(
    graphql`
      query {
        allWpCategory {
          nodes {
            name
            slug
            posts {
              nodes {
                title
                slug
                date
              }
            }
            pages {
              nodes {
                title
                slug
                date
              }
            }
          }
        }
      }
    `
  )
  return allWpCategory.nodes
}