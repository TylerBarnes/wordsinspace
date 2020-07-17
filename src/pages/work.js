import React from "react"

import {usePages} from "../hooks/usePages"
import {usePosts} from "../hooks/usePosts"

import Browser from "../layouts/browser"

import SEO from "../components/seo"
import List from "../components/list"

const Work = () => {
	const pages = usePages()
	const posts = usePosts()
	
	return (
	  <Browser>
      <SEO title="work" />
      <List items={[...pages, ...posts]}/>
    </Browser>
	)

}

export default Work
