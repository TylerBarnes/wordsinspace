import React from 'react';
import { gql, useQuery } from '@apollo/client'

// A GraphQL query looking up Posts and Pages which contain a given Tag
const SEARCH_TAGS_QUERY = gql`
  query SearchTagsQuery($first: Int, $tags: [String!]!) {
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

export const useTagQueries = (selectedTags, isTagMode) => {
  // GraphQL query to get the list of Posts and Pages of a selected Tag
  const response = useQuery(SEARCH_TAGS_QUERY, {
    variables: {first: 100, tags: selectedTags.filter(tag=> tag.checked).map(d=> d.name) },
    skip: !isTagMode
  })

  const results = isTagMode && !response.loading 
                ? [...response.data.posts.nodes, ...response.data.pages.nodes].sort( (a, b) => a.date > b.date)
                : []    
  
  return results;
}