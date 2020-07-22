import React from "react"

import {usePages} from "../hooks/usePages"
import {usePosts} from "../hooks/usePosts"
import {useCategories} from "../hooks/useCategories"
import {useTags} from "../hooks/useTags"

import Browser from "../layouts/browser"
import SEO from "../components/seo"
import Filters from "../components/filters"
import List from "../components/list"

const Work = () => {
	const pages = usePages()
	const posts = usePosts()
  const categories = useCategories();
  const tags = useTags();

  // if no Tag is selected
  const items = [...pages,...posts]

  // if Tags are selected (pseudocode)
  // items.filter(item => item.selectedTag)

  return (
    <Browser>
      <SEO title="work" />
      <List items={items}/>
      <Filters categories={categories} tags={tags}/>
    </Browser>
	)
}

export default Work
