import React, {useState, useEffect} from "react"
import { gql, useQuery } from '@apollo/client'

import {usePages} from "../hooks/usePages"
import {usePosts} from "../hooks/usePosts"
import {useCategories} from "../hooks/useCategories"
import {useTags} from "../hooks/useTags"

import Browser from "../layouts/browser"
import SEO from "../components/seo"
import Filters from "../components/filters"
import List from "../components/list"

// A GraphQL query looking up Posts and Pages which contain a given Tag
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
  const [items, setItems] = useState([])
  const [tags, setTags] = useState(useTags())
  const [selectedTags, setSelectedTags] = useState(tags.map(tag =>{ return { name: tag.name, checked : false}}))
  const [categories, setCategories] = useState(useCategories())
  const pages = usePages()
  const posts = usePosts()

  // initialize items array with all Posts and Pages
  useEffect( ()=> {
    setItems([...pages,...posts])
  }, [])

  function handleTags(e) {
    const { name } = e.target;
    setSelectedTags([...selectedTags].map(tag => tag.name === name ? { name: name, checked: !tag.checked } : tag))
  }

  const {loading, error, data} = useQuery(SEARCH_TAGS_QUERY, {
    variables: {first: 150, tagName: 'teaching'},
  })
  const results = !loading ? [...data.posts.nodes, ...data.pages.nodes] : []

  return (
    <Browser>
      <SEO title="work" />
      <List items={items}/>
      <Filters categories={categories} tags={tags} selectedTags={selectedTags} getSelectedTags={handleTags}/>
    </Browser>
	)
}

export default Work
