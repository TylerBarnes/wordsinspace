import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Reader from "../layouts/reader"

import ArticleTitle from "../components/article/articleTitle"
import ArticleContent from "../components/article/articleContent"
import ArticleDate from "../components/article/articleDate"
import ArticleCategory from "../components/article/articleCategory"
import ArticleTags from "../components/article/articleTags"

export default function pageTemplate({ data }) {

  const { title, date, content, categories, tags} = data.allWpPage.nodes[0]

  return (
    <Reader>
      <SEO title={title} />
      {/* ==================== Date, Categories, Tags ====================  */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row wrap',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginTop: '5px',
        }}>
        {date && <ArticleDate date={date}/>}
        {categories && <ArticleCategory categories={categories}/>}
        {tags && <ArticleTags tags={tags}/>}
      </div>

      {/* ==================== Title ====================  */}
      <ArticleTitle title={title}/>
      
      {/* ==================== Content ====================  */}
      <ArticleContent content={content} tags={tags} title={title} />
     
    </Reader>
  )
}

export const query = graphql `
  query getPage($id: String!) {
    allWpPage(filter: {id: { eq: $id }}) {
      nodes {
        id
        title
        content
        date
        uri
        slug
        categories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            slug
            name
            posts {
              nodes {
                title
                slug
                date
                nodeType
                uri
                categories {
                  nodes {
                    name
                  }
                }
                tags {
                  nodes {
                    slug
                  }
                }
              }
            }
            pages {
              nodes {
                title
                slug
                date
                nodeType
                uri
                categories {
                  nodes {
                    name
                  }
                }
                tags {
                  nodes {
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`