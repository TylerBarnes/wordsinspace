import React from "react"
import { graphql } from "gatsby"

import Reader from "../layouts/reader"
import Footer from "../components/footer"

import ArticleTitle from "../components/article/articleTitle"
import ArticleDate from "../components/article/articleDate"
import ArticleCategory from "../components/article/articleCategory"
import ArticleTags from "../components/article/articleTags"
import ArticleRelated from "../components/article/articleRelated"

import {getRelated} from "../utils/helpers"

export default function pageTemplate({ data }) {
  if (!data) return null

  const { title, date, content, categories, tags} = data.allWpPage.nodes[0]
  console.log("tags is ", tags) // debugging line for tag.pages/tag.posts being absent in helpers.js
  const related = getRelated(tags, title)
  const showRelated = related.length > 0

  return (
    <Reader>
      <div
        style={{
          width: '100%'
        }}>
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

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
          }}>
          {/* ==================== Related ========================  */}
          {showRelated && <ArticleRelated related={related} />}

          {/* ==================== Related - placeholder =========== */}
          {!showRelated
            &&
            <div
              style={{
                width: '250px',
                alignSelf: 'flex-start',
                marginTop: '70vh',
                marginRight: '2vw'
              }}>
            </div>
          }

          {/* ==================== Content ====================  */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-evenly',
              margin: '0vh 5vh 0vh 5vh',
              width: '65vw'
            }}>
              <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
              {/*<div
                className="citations"
                style={{
                  width: '30vw',
                  alignSelf: 'flex-end'
                }}
                dangerouslySetInnerHTML={{ __html: citations.citations }}
              />*/}
          </div>
        </div>

        {/* ==================== Footer ====================  */}
        <Footer />
      </div>
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
