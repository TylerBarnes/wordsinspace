import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"

import {useCategories} from "../hooks/useCategories"
import {useTagSelection} from "../hooks/useTagSelection"

import Browser from "../layouts/browser"
import SEO from "../components/seo"
import Filters from "../components/filters"
import List from "../components/list"

export default function CategoryTemplate({data}) {
    
  const categories = useCategories()
  const category = data.allWpCategory.nodes[0];
  const pages = category.pages.nodes;
  const posts = category.posts.nodes;
  const initial = [...pages, ...posts];
  const [isTagMode, setTagMode] = useState(false)
  const [tags, setTags] = useState(extractTags(category,initial))

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
  const response = useTagSelection(tags, isTagMode);
  const tagQueryResults = isTagMode && !response.loading 
                          ? [...response.data.posts.nodes, ...response.data.pages.nodes].sort( (a, b) => a.date > b.date)
                          : [] 
  console.log('displaying', initial.length, 'original items', tagQueryResults.length, 'filtered items and', tags.length, 'tags')

  return (
    <Browser>
      <SEO title={category.name} />
      <List items={isTagMode ? tagQueryResults : initial} loading={response.loading}/>
      <Filters categories={categories} tags={tags} selectTags={handleSelection} clearTags={handleClear} isTagMode={isTagMode}/>
    </Browser>
  )
}

function extractTags(category,initial) {
   let tags = initial
             .filter(hasTags=>hasTags.tags && hasTags.tags.nodes.length>0)
             .map(item=> {
               let item_tags = item.tags.nodes.map(tag => {return {checked: false, slug: tag.slug, name: tag.name, id: tag.id}})
               return item_tags
             })
             .flat(2)
             .filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
             .sort( (a, b) => a.id.localeCompare(b.id, 'en', {'sensitivity': 'base'}))
             // https://stackoverflow.com/a/56757215 and https://stackoverflow.com/a/58958381
  
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