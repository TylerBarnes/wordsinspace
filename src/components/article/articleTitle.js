import React from "react"

import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {getResponsiveReaderVars} from "../../utils/dom"

const ArticleTitle = ({title}) => {
  const breakpoints = useBreakpoint()
  const {mobileArticleTitle} = getResponsiveReaderVars(breakpoints)
  
  return (
    <div
      className={mobileArticleTitle ? 'reader-title-mobile' : 'reader-title'}>
      {title}
    </div>
  )
}

export default ArticleTitle