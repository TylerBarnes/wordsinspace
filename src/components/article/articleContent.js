import React from "react"

import useBreakpoints from '../../hooks/useBreakpoint';
import {getResponsiveReaderVars} from "../../utils/dom"

import ArticleRelated from "./articleRelated"
import {getRelated} from "../../utils/helpers"

const ArticleContent = ({tags, title, content}) => {

  const related = getRelated(tags, title)
  const showRelated = related?.length > 0

  const breakpoint = useBreakpoints(typeof window !== `undefined`)

  const {mobileArticleContent, mobileArticleContentWidth, mobileArticleContentMargin, mobileArticleContentPadding } = getResponsiveReaderVars(breakpoint)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: mobileArticleContent ? 'column' : 'row',
        justifyContent: mobileArticleContent ? 'flex-start' : 'space-between',
        alignItems: 'flex-start',
      }}>
      {/* ==================== Related ========================  */}
      <ArticleRelated
      	related={related}
      	mobileArticleContent={mobileArticleContent}
      	showRelated={showRelated}/>

      {/* ==================== Content ====================  */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          order: mobileArticleContent ? '1' : '2',
          margin: mobileArticleContentMargin,
          padding: mobileArticleContentPadding,
          width: mobileArticleContentWidth
        }}>
          <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export default ArticleContent
