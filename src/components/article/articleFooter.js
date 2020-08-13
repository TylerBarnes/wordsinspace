import React from "react"

import useBreakpoints from '../../hooks/useBreakpoint';
import {getResponsiveReaderVars} from "../../utils/dom"

import Footer from '../footer'
import MobileFooter from '../mobile/mobileFooter'

const ArticleFooter = () => {
  const breakpoint = useBreakpoints()
  const {mobileArticleFooter} = getResponsiveReaderVars(breakpoint)

  return (
    <div>
	    {!mobileArticleFooter && <Footer />}
	    {mobileArticleFooter && <MobileFooter />}
    </div>
  )
}

export default ArticleFooter
