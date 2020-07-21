import { useStaticQuery, graphql } from "gatsby"

export const useTags = () => {
  const { allWpTag } = useStaticQuery(
    graphql`
      query {
        allWpTag {
          nodes {
            name
            id
            slug
            posts {
              nodes {
                title
                slug
                date
                nodeType
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
                nodeType
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
  return allWpTag.nodes
}