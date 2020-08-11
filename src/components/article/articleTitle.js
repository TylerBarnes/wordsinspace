import React from "react"

import useBreakpoints from '../../hooks/useBreakpoint';
import {getResponsiveReaderVars} from "../../utils/dom"

const ArticleTitle = ({title}) => {

  const breakpoint = useBreakpoints()
  const {mobileArticleTitle} = getResponsiveReaderVars(breakpoint)
  
  return (
    <div
      className={mobileArticleTitle ? 'reader-title-mobile' : 'reader-title'}>
      {title}
    </div>
  )
}

export default ArticleTitle