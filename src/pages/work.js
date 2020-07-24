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

  const pages = usePages()
  const posts = usePosts()
  const categories= useCategories()

  const [isTagMode, setTagMode] = useState(false)
  const init_tags = useTags()
  const [tags, setTags] = useState(init_tags)

  // updates the tags array
  function handleSelection(e) {
    const { name } = e.target;
    setTags(tags.map(tag => tag.name === name ? {...tag, checked: !tag.checked } : tag))
  }

  function handleClear(e) {
    e.preventDefault()
    setTags(tags.map(tag=> ({...tag, checked: false})))
    setTagMode(false)
  }

  useEffect(()=> {
    setTagMode(tags.filter(tag=>tag.checked).length > 0)
  }, [tags])

  const response= useTagSelection(tags, isTagMode);
  const tagQueryResults= isTagMode && !response.loading 
                ? [...response.data.posts.nodes, ...response.data.pages.nodes].sort( (a, b) => a.date > b.date)
                : []    
  return (
    <Browser>
      <SEO title="work" />
      <List items={isTagMode ? tagQueryResults : [...pages, ...posts]} loading={response.loading}/>
      <Filters categories={categories} tags={tags} selectTags={handleSelection} clearTags={handleClear} isTagMode={isTagMode}/>
    </Browser>
	)
}

export default Work
