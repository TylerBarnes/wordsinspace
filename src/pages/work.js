import React from "react"

import {usePages} from "../hooks/usePages"
import {usePosts} from "../hooks/usePosts"
import {myContext} from '../context/provider'

import Browser from "../layouts/browser"

import SEO from "../components/seo"
import List from "../components/list"

const Work = () => {
	const pages = usePages()
	const posts = usePosts()
	const items = [...pages,...posts]

	return (
		<myContext.Consumer>
      {context => (
        <React.Fragment>
				  <Browser>
			      <SEO title="work" />
			      <List items={items.filter(item => item.content.includes(context.searchTerm))}/>
			    </Browser>
	      </React.Fragment>
      )}
    </myContext.Consumer>
	)
}

export default Work
