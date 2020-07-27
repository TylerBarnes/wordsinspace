import React, {useState, useEffect} from "react"
import {usePages} from "../hooks/usePages"
import {usePosts} from "../hooks/usePosts"
import {useTags} from "../hooks/useTags"
import {useTagSelection} from "../hooks/useTagSelection"
import {sortByDate} from "../utils"

import Browser from "../layouts/browser"
import SEO from "../components/seo"
import Filters from "../components/filters"
import List from "../components/list"

const Work = () => {

  // initialize the items to all of the Pages and all of the Posts
  const initial = [...usePages(), ...usePosts()]
  const [isTagMode, setTagMode] = useState(false)
  const [tagQueryResults, setTagQueryResults] = useState([])
  
  // initialize the tags to all of the Tags available
  const [tags, setTags] = useState(useTags())

  // handles clicking on Tags by updating the 'checked' key-value for every tag
  function handleSelection(e) {
    const { name } = e.target;
    setTags(tags.map(tag => tag.name === name ? {...tag, checked: !tag.checked } : tag))
  }

  // handles clearing the Tag selections and toggling TagMode
  function handleClear(e) {
    e.preventDefault()
    setTags(tags.map(tag=> ({...tag, checked: false})))
    setTagMode(false)
  }

  // watches tags array for updates and updates the Tag Mode in case no Tag is checked
  useEffect(()=> {
    setTagMode(tags.filter(tag=>tag.checked).length > 0)
  }, [tags])

  // Apollo useQuery (imported as a hook) fetches Posts and Pages of selected Tags array
  const response = useTagSelection(tags.filter(tag=>tag.checked), isTagMode);
  
  // watches tags array for updates and updates the Tag Mode in case no Tag is checked
  useEffect(()=> {
    if (isTagMode && !response.loading) {
      setTagQueryResults([...response.data.posts.nodes, ...response.data.pages.nodes])
    }
  }, [response.data])
  
  return (
    <Browser>
      <SEO title="work" />
      <List items={sortByDate(isTagMode ? tagQueryResults : initial)} loading={response.loading}/>
      <Filters tags={tags} selectTags={handleSelection} clearTags={handleClear} isTagMode={isTagMode}/>
    </Browser>
	)
}

export default Work
