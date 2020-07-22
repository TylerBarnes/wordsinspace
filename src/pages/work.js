import React from "react"

import {usePages} from "../hooks/usePages"
import {usePosts} from "../hooks/usePosts"

import Browser from "../layouts/browser"
import Filters from "../components/filters"
import SEO from "../components/seo"
import List from "../components/list"

const Work = () => {
	const pages = usePages()
	const posts = usePosts()
	const items = [...pages,...posts]

  return (
    <Browser>
      <SEO title="work" />
      <List items={items}/>
      <Filters />
    </Browser>
	)
}

export default Work
