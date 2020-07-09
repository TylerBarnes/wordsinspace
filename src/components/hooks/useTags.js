import { useStaticQuery, graphql } from "gatsby"

export const useTags = () => {
  const { allWpTag } = useStaticQuery(
    graphql`
      query {
        allWpTag {
          nodes {
            name
            slug
            posts {
              nodes {
                title
                slug
                date
                nodeType
              }
            }
            pages {
              nodes {
                title
                slug
                date
                nodeType
              }
            }
          }
        }
      }
    `
  )
  return allWpTag.nodes
}