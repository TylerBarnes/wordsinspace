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

  const sortedTags = allWpTag.nodes.filter(tag => tag.name.length > 0)
                         .filter(hasTags => hasTags.pages.nodes.length>0 || hasTags.posts.nodes.length>0)
                         .sort((a, b) => a.posts.nodes.length + a.pages.nodes.length < b.posts.nodes.length + b.pages.nodes.length ? 1 : -1)
                         .map(obj=> ({ ...obj, checked: false }))

  return sortedTags 
}