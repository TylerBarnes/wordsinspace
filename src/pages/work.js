import React, {useState, useEffect} from "react"

import {usePages} from "../hooks/usePages"
import {usePosts} from "../hooks/usePosts"
import {useCategories} from "../hooks/useCategories"
import {useTags} from "../hooks/useTags"
import {useTagSelection} from "../hooks/useTagSelection"

import Browser from "../layouts/browser"
import SEO from "../components/seo"
import Filters from "../components/filters"
import List from "../components/list"

const Work = () => {

  const categories= useCategories()
  const pages = usePages()
  const posts = usePosts()
  const initial = [...pages, ...posts]
  const [isTagMode, setTagMode] = useState(false)
  const [tags, setTags] = useState(useTags())

  // updates the tags array
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
      <SEO title="work" />
      <List items={isTagMode ? tagQueryResults : initial} loading={response.loading}/>
      <Filters categories={categories} tags={tags} selectTags={handleSelection} clearTags={handleClear} isTagMode={isTagMode}/>
    </Browser>
	)
}

export default Work
