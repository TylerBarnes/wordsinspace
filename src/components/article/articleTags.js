import React from "react"

import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {getResponsiveReaderVars} from "../../utils/dom"
import MobileTags from '../mobile/mobileTags'

const ArticleTags = ({tags}) => {
  const breakpoints = useBreakpoint()
  const {mobileArticleTags, mobileReaderWidth} = getResponsiveReaderVars(breakpoints)

  if (mobileArticleTags) return <MobileTags tags={tags} mobileReaderWidth={mobileReaderWidth} />

  return (
		<div
      style={{
        alignSelf: 'flex-start',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignContent: 'flex-start',
      }}>
      {tags.nodes.map((tag, index_tag) =>
        <span
          style={{
            marginRight: '10px',
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
