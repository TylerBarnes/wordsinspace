import React from "react"

import useBreakpoints from '../../hooks/useBreakpoint';
import {getResponsiveReaderVars} from "../../utils/dom"

import Footer from '../footer'
import MobileFooter from '../mobile/mobileFooter'

const ArticleFooter = () => {
  const breakpoint = useBreakpoints()
  const {mobileArticleFooter} = getResponsiveReaderVars(breakpoint)

  return (
    <>
    {!mobileArticleFooter && <Footer />}
    {mobileArticleFooter && <MobileFooter />}
    </>
  )
}

export default ArticleFooter