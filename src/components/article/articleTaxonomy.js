import React from "react"
import {Link} from "gatsby"

import ArticleDate from './articleDate'
import ArticleCategory from './articleCategory'
import ArticleTags from './articleTags'

import useBreakpoints from '../../hooks/useBreakpoint';
import {getResponsiveReaderVars} from "../../utils/dom"


const ArticleTaxonomy = ({date, categories, tags}) => {
  const breakpoint = useBreakpoints()
  const {mobileTaxonomy} = getResponsiveReaderVars(breakpoint)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: mobileTaxonomy ? 'column' : 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
      >
      {date && <ArticleDate date={date} />}
      {categories && <ArticleCategory categories={categories} />}
      {tags && <ArticleTags tags={tags} />}
    </div>
  )
}

export default ArticleTaxonomy