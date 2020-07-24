import React from 'react';
import { gql, useQuery } from '@apollo/client'

// A GraphQL query looking up Tags which come from Pages and Posts of a given category
const SEARCH_TAGS_CATEGORIES = gql`
  query SearchTagsCategories($category: String!) {
    tags {
      nodes {
        name
        id
        slug
        posts(where: {categoryName: $category}) {
          nodes {
            title
            slug
            date
            tags {
              nodes {
                slug
              }
            }
          }
        }
        pages(where: {categoryName: $category}) {
          nodes {
            title
            slug
            date
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

export const useTagCategory = (category) => {
  const response = useQuery(SEARCH_TAGS_CATEGORIES, {
    variables: {category: category},
  })

  const unsortedTags = !response.loading 
                     ? response.data.tags.nodes
                     : []   

  const sortedTags = unsortedTags.filter(tag => tag.name.length > 0)
                         .filter(hasTags => hasTags.pages.nodes.length>0 || hasTags.posts.nodes.length>0)
                         .sort((a, b) => a.posts.nodes.length + a.pages.nodes.length < b.posts.nodes.length + b.pages.nodes.length ? 1 : -1)
                         .map(obj=> ({ ...obj, checked: false }))
  return sortedTags 
}