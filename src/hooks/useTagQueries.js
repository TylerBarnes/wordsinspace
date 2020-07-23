import React from 'react';
import { gql, useQuery } from '@apollo/client'

// A GraphQL query looking up Posts and Pages which contain a given Tag
const SEARCH_TAGS_QUERY = gql`
  query SearchQuery($first: Int, $tagName: String!) {
    posts(first: $first, where: {tag: $tagName}) {
      nodes {
        id
        slug
        title
        date
        excerpt
      }
    }
    pages(first: $first, where: {tag: $tagName}) {
      nodes {
        id
        slug
        title
        date
        content
      }
    }
  }
`

export const useTagQueries = (selectedTags) => {
  // GraphQL query to get the list of Posts and Pages of a selected Tag
  const response = useQuery(SEARCH_TAGS_QUERY, {
    variables: {first: 150, tagName: selectedTags[0].name},
  })
  
  const results = !response.loading ? [...response.data.posts.nodes, ...response.data.pages.nodes] : []    
  
  return [results];
}