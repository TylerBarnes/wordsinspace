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

  const pages = usePages()
  const posts = usePosts()
  const categories= useCategories()

  const [isTagMode, setTagMode] = useState(false)
  const [tags, setTags] = useState(useTags())

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

  const response= useTagQueries(tags, isTagMode);
  const tagQueryResults= isTagMode && !response.loading 
                ? [...response.data.posts.nodes, ...response.data.pages.nodes].sort( (a, b) => a.date > b.date)
                : []    
  return (
    <Browser>
      <SEO title="work" />
      {response.loading ? <div>Loading....</div> : null}
      <List items={isTagMode ? tagQueryResults : [...pages, ...posts]}/>
      <Filters categories={categories} tags={tags} selectTags={handleSelection} clearTags={handleClear} isTagMode={isTagMode}/>
    </Browser>
	)
}

export default Work
