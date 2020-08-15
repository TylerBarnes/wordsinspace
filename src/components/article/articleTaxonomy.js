import React from "react"

import ArticleDate from './articleDate'
import ArticleCategory from './articleCategory'
import ArticleTags from './articleTags'

import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {getResponsiveReaderVars} from "../../utils/dom"


const ArticleTaxonomy = ({date, categories, tags}) => {
  const breakpoints = useBreakpoint()
  const {mobileTaxonomy} = getResponsiveReaderVars(breakpoints)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: mobileTaxonomy ? 'column' : 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
      >
      <div style= {{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        width: mobileTaxonomy ? '84vw' : 'auto',
        margin: mobileTaxonomy ? '0 auto' : '0',
      }}>
        {date && <ArticleDate date={date} />}
        {categories && <ArticleCategory categories={categories} />}
      </div>
      {tags && <ArticleTags tags={tags} />}
    </div>
  )
}

export default ArticleTaxonomy
