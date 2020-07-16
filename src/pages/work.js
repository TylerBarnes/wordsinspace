import React from "react"

import {usePages} from "../components/hooks/usePages"
import {usePosts} from "../components/hooks/usePosts"

import SEO from "../components/seo"
import List from "../components/list"
import Browser from "../components/layouts/browser"

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
