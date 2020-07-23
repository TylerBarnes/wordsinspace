import React, {useState} from "react"
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
  const categories = useCategories();
  
  const tags = useTags()
  const [selectedTags, setSelectedTags] = useState(tags.map(tag =>{ return { name: tag.name, checked : false}}))
  const [items, setItems] = useState([...pages, ...posts])

  // updates the selectedTags array
  function handleTags(e) {
    const { name } = e.target;
    setSelectedTags([...selectedTags].map(tag => tag.name === name ? { name: name, checked: !tag.checked } : tag))
  }

  const results = useTagQueries(selectedTags);

  return (
    <Browser>
      <SEO title={category.name} />
      <List items={results.length > 0 ? results : items}/>
      <Filters categories={categories} tags={tags} selectedTags={selectedTags} getSelectedTags={handleTags}/>
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