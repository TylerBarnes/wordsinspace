import React from "react"

import useBreakpoints from '../../hooks/useBreakpoint';
import {getResponsiveReaderVars} from "../../utils/dom"

const ArticleTags = ({tags}) => {
  const breakpoint = useBreakpoints()
  const {mobileArticleTags} = getResponsiveReaderVars(breakpoint)

  return (
		<div
      style={{
        alignSelf: 'flex-start',
        margin: '-4px 5px -4px 20px',
        display: mobileArticleTags ? 'none' : 'visible'
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