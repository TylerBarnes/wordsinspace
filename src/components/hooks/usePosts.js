import { useStaticQuery, graphql } from "gatsby"

export const usePosts = () => {
  const { allWpPost } = useStaticQuery(
    graphql`
      query {
        allWpPost {
          nodes {
            slug
            title
            date
            nodeType
            content
          }
        }
      }
    `
  )
  return allWpPost.nodes
}