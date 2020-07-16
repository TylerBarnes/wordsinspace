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
      <div 
        style={{
          display: `flex`,
          flexDirection: `row`,
          alignItems: `flex-start`, 
          justifyContent: `flex-start`, 
        }}
        >
        <List items={[...pages, ...posts]}/>
      </div>
    </Browser>
	)

}

export default Work
