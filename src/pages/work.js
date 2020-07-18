import React from "react"

import {usePages} from "../hooks/usePages"
import {usePosts} from "../hooks/usePosts"
import {searchContext} from '../context/provider'

import Browser from "../layouts/browser"

import SEO from "../components/seo"
import List from "../components/list"

const Work = () => {
	const pages = usePages()
	const posts = usePosts()
	const items = [...pages,...posts]

	return (
		<searchContext.Consumer>
      {context => (
        <React.Fragment>
				  <Browser>
			      <SEO title="work" />
			      <List searchInfoVisible={context.searchInfoVisible} items={items.filter(item => item.content && item.content.includes(context.searchTerm))}/>
			    </Browser>
	      </React.Fragment>
      )}
    </searchContext.Consumer>
	)
}

export default Work
