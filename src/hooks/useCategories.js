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
                content
                excerpt
                tags {
                  nodes {
                    slug
                  }
                }
              }
            }
            pages {
              nodes {
                title
                slug
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
        }
      }
    `
  )
  return allWpCategory.nodes
}