import React, {useState, useEffect} from "react"

import {usePages} from "../hooks/usePages"
import {usePosts} from "../hooks/usePosts"
import {useCategories} from "../hooks/useCategories"
import {useTags} from "../hooks/useTags"
import {useTagQueries} from "../hooks/useTagQueries"

import Browser from "../layouts/browser"
import SEO from "../components/seo"
import Filters from "../components/filters"
import List from "../components/list"

const Work = () => {

  const [categories, setCategories] = useState(useCategories())
  const pages = usePages()
  const posts = usePosts()
  const [items, setItems] = useState([...pages, ...posts])
  
  const [isTagMode, setTagMode] = useState(false)
  const tags = useTags()
  const [selectedTags, setSelectedTags] = useState(tags.map(tag =>{ return { name: tag.name, checked : false}}))

  // updates the selectedTags array
  function handleTags(e) {
    const { name } = e.target;
    setSelectedTags([...selectedTags].map(tag => tag.name === name ? { name: name, checked: !tag.checked } : tag))
  }

  useEffect(()=> {
    setTagMode(selectedTags.filter(tag=>tag.checked).length > 0)
  }, [selectedTags])

  const tagQueryResults = useTagQueries(selectedTags, isTagMode);

  return (
    <Browser>
      <SEO title="work" />
      <List items={isTagMode ? tagQueryResults : items}/>
      <Filters categories={categories} tags={tags} selectedTags={selectedTags} getSelectedTags={handleTags}/>
    </Browser>
	)
}

export default Work
