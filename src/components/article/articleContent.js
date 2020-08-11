import React from "react"

import useBreakpoints from '../../hooks/useBreakpoint';
import {getResponsiveReaderVars} from "../../utils/dom"

import ArticleRelated from "./articleRelated"
import {getRelated} from "../../utils/helpers"

const ArticleContent = ({tags, title, content}) => {

  const related = getRelated(tags, title)
  const showRelated = related?.length > 0

  const breakpoint = useBreakpoints()
  const {mobileArticleContent} = getResponsiveReaderVars(breakpoint)

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: mobileArticleContent ? 'column' : 'row',
        justifyContent: mobileArticleContent ? 'flex-start' : 'space-evenly',
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
          margin: mobileArticleContent ? '0' : '0vh 5vh 0vh 5vh',
          padding: mobileArticleContent ? '5px 15px' : '0',
          width: mobileArticleContent ? '93vw' : '70vw'
        }}> 
          <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export default ArticleContent