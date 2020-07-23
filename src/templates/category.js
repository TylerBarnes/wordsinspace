import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"

import {useCategories} from "../hooks/useCategories"
import {useTags} from "../hooks/useTags"
import {useTagQueries} from "../hooks/useTagQueries"

import Browser from "../layouts/browser"
import SEO from "../components/seo"
import Filters from "../components/filters"
import List from "../components/list"

export default function CategoryTemplate({data}) {
    
  const category = data.allWpCategory.nodes[0];
  const pages = category.pages.nodes;
  const posts = category.posts.nodes;
  const categories = useCategories()

  const [items, setItems] = useState([...pages, ...posts])
  const [isTagMode, setTagMode] = useState(false)
  const [tags, setTags] = useState(useTags())

  // updates the tags array
  function handleSelection(e) {
    const { name } = e.target;
    setTags([...tags].map(tag => tag.name === name ? {checked: !tag.checked } : tag))
  }

  function handleClear(e) {
    e.preventDefault()
    setTags(tags.map(tag=> ({name: tag.name, checked: false})))
  }

  useEffect(()=> {
    setTagMode(tags.filter(tag=>tag.checked).length > 0)
  }, [tags])

  const tagQueryResults = useTagQueries(tags, isTagMode);

  return (
    <Browser>
      <SEO title={category.name} />
      <List items={isTagMode ? tagQueryResults : items}/>
      <Filters categories={categories} tags={tags} selectTags={handleSelection} clearTags={handleClear}/>
    </Browser>
  )
}

export const query = graphql`
  query getCategory($slug: String!) {
    allWpCategory(filter: {slug: { eq: $slug }}) {
      nodes {
        name
        slug
        posts {
          nodes {
            title
            slug
            date
            nodeType
            content
            excerpt
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
            content
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