import React from "react"

import useBreakpoints from '../../hooks/useBreakpoint';
import {getResponsiveReaderVars} from "../../utils/dom"
import MobileTags from '../mobile/mobileTags'

const ArticleTags = ({tags}) => {
  const breakpoint = useBreakpoints()
  const {mobileArticleTags, mobileReaderWidth} = getResponsiveReaderVars(breakpoint)

  if (mobileArticleTags) return <MobileTags tags={tags} mobileReaderWidth={mobileReaderWidth} />
  
  return (
		<div
      style={{
        alignSelf: 'flex-start',
      }}> 
      {tags.nodes.map((tag, index_tag) => 
        <span 
          style={{
            marginRight: '10px'
          }}
          className='tag'
          key={index_tag}>
          {tag.slug}
        </span>
      )}
    </div>
  )
}

export default ArticleTags
