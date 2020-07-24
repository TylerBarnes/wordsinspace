import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"

import {useCategories} from "../hooks/useCategories"
import {useTags} from "../hooks/useTags"
import {useTagSelection} from "../hooks/useTagSelection"
import {useTagCategory} from "../hooks/useTagCategory"

import Browser from "../layouts/browser"
import SEO from "../components/seo"
import Filters from "../components/filters"
import List from "../components/list"

export default function CategoryTemplate({data}) {
    
  const categories = useCategories()
  const category = data.allWpCategory.nodes[0];
  const pages = category.pages.nodes;
  const posts = category.posts.nodes;
  const [isTagMode, setTagMode] = useState(false)
  const [tags, setTags] = useState(extractTags(category, posts, pages))

  // handle Tag selection
  function handleSelection(e) {
    const { name } = e.target;
    setTags(tags.map(tag => tag.name === name ? {...tag, checked: !tag.checked } : tag))
  }

  // handle Clear button
  function handleClear(e) {
    e.preventDefault()
    setTags(tags.map(tag=> ({...tag, checked: false})))
    setTagMode(false)
  }

  // set tagMode to false if no tag is selected
  useEffect(()=> {
    setTagMode(tags.filter(tag=>tag.checked).length > 0)
  }, [tags])


  // GraphQL-Apollo query to get the posts corresonding to current Tag selection
  const {tagQueryResults, loading} = useTagSelection(tags, isTagMode);

  return (
    <Browser>
      <SEO title={category.name} />
      <List items={isTagMode ? tagQueryResults : [...pages, ...posts]} loading={loading}/>
      <Filters categories={categories} tags={tags} selectTags={handleSelection} clearTags={handleClear}/>
    </Browser>
  )
}

function extractTags(category, posts, pages) {
   let tags = [...posts,...pages].filter(hasTags=>hasTags.tags && hasTags.tags.nodes.length>0)
             .map(item=> {
               let item_tags = item.tags.nodes.map(tag => {return {checked: false, slug: tag.slug, name: tag.name, id: tag.id}})
               return item_tags
             })
             .flat(2)
             .filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
             .sort( (a, b) => a.id.localeCompare(b.id, 'en', {'sensitivity': 'base'}))
  return tags
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
            content
            excerpt
            tags {
              nodes {
                slug
                name
                id
              }
            }
          }
        }
        pages {
          nodes {
            title
            slug
            date
            content
            tags {
              nodes {
                slug
                name
                id
              }
            }
          }
        }
      }
    }
  }
`