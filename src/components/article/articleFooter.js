import React from "react"

import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {getResponsiveReaderVars} from "../../utils/dom"

import Footer from '../footer'
import MobileFooter from '../mobile/mobileFooter'

const ArticleFooter = () => {
  const breakpoints = useBreakpoint()
  const {mobileArticleFooter} = getResponsiveReaderVars(breakpoints)

  return (
    <div>
	    {!mobileArticleFooter && <Footer />}
	    {mobileArticleFooter && <MobileFooter />}
    </div>
  )
}

export default ArticleFooter
