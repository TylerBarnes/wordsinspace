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
  const [tags, setTags] = useState(useTags())
  const [selectedTags, setSelectedTags] = useState(tags.map(tag =>{ return { name: tag.name, checked : false}}))
  const [categories, setCategories] = useState(useCategories())
  const pages = usePages()
  const posts = usePosts()
  const [items, setItems] = useState([...pages, ...posts])

  // updates the selectedTags array
  function handleTags(e) {
    const { name } = e.target;
    setSelectedTags([...selectedTags].map(tag => tag.name === name ? { name: name, checked: !tag.checked } : tag))
  }

  const results = useTagQueries(selectedTags);

  return (
    <Browser>
      <SEO title="work" />
      <List items={results.length > 0 ? results : items}/>
      <Filters categories={categories} tags={tags} selectedTags={selectedTags} getSelectedTags={handleTags}/>
    </Browser>
	)
}

export default Work
