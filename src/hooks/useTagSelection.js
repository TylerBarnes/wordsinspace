import { gql, useQuery } from '@apollo/client'

// A GraphQL query looking up Posts and Pages which contain a given Tag
const SEARCH_TAGS_QUERY = gql`
  query SearchTagsQuery($first: Int!, $tags: [String!]!) {
    pages(first: $first, where: {tagSlugIn: $tags}) {
      nodes {
        id
        slug
        title
        date
        content
        uri
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        tags {
          nodes {
            slug
          }
        }
      }
    }
    posts(first: $first, where: {tagSlugIn: $tags}) {
      nodes {
        id
        slug
        title
        date
        excerpt
        uri
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
// we are using the Apollo useQuery hook in order to query the Apollo GraphQL layer using variables (the array of tags' slugs in this case)
export const useTagSelection = (tags, isTagMode) => {

  // extract slugs from the tags that are set to 'checked: true'
  const slugs = tags.map(d => d.slug)
  
  // GraphQL query to get the list of Posts and Pages of a selected Tag
  const response = useQuery(SEARCH_TAGS_QUERY, {
    variables: {first: 100, tags: slugs },
    skip: !isTagMode
  })
  
  return response
}