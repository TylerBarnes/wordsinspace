import React from "react"
import { gql, useQuery } from '@apollo/client'

import {usePages} from "../hooks/usePages"
import {usePosts} from "../hooks/usePosts"
import {useCategories} from "../hooks/useCategories"
import {useTags} from "../hooks/useTags"

import Browser from "../layouts/browser"
import SEO from "../components/seo"
import Filters from "../components/filters"
import List from "../components/list"

// The GraphQL query containing the search term, will be sent to Apollo
const SEARCH_TAGS_QUERY = gql`
  query SearchQuery($first: Int, $tagName: String!) {
    posts(first: $first,where: {tag: $tagName}) {
      nodes {
        id
        slug
        title
        date
        excerpt
      }
    }
    pages(first: $first,where: {tag: $tagName}) {
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

const Work = () => {
	const pages = usePages()
	const posts = usePosts()
  const categories = useCategories();
  const tags = useTags();

  // GraphQL query to grab the posts/pages out of the specific Tag that has been selected
  const {loading, error, data} = useQuery(SEARCH_TAGS_QUERY, {
    variables: {first: 150, tagName: 'teaching'},
  })
  const searchResults = !loading ? [...data.posts.nodes, ...data.pages.nodes] : []
  console.log(searchResults)

  // if no Tag is selected
  const items = [...pages,...posts]

  return (
    <Browser>
      <SEO title="work" />
      <List items={items}/>
      <Filters categories={categories} tags={tags}/>
    </Browser>
	)
}

export default Work
