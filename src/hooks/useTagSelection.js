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
        tags {
          nodes {
            slug
          }
        }
      }
    }
  }
`

export const useTagSelection = (tags, isTagMode) => {
  // GraphQL query to get the list of Posts and Pages of a selected Tag
  const slugs = tags.filter(tag=> tag.checked).map(d => d.slug)
  const response = useQuery(SEARCH_TAGS_QUERY, {
    variables: {first: 100, tags: slugs },
    skip: !isTagMode
  })
  
  return response
}