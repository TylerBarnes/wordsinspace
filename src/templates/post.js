import React from "react"
import {graphql } from "gatsby"

import Reader from "../layouts/reader"
import Footer from "../components/footer"

import ArticleTitle from "../components/article/articleTitle"
import ArticleDate from "../components/article/articleDate"
import ArticleCategory from "../components/article/articleCategory"
import ArticleTags from "../components/article/articleTags"
import ArticleRelated from "../components/article/articleRelated"

export default function postTemplate({ data }) {
  if(!data) return null

  const {title, date, content, related, categories, tags } = data.allWpPost.nodes[0]
  const {posts, pages} = related;
  const showRelated = posts?.length > 0 || pages?.length > 0
  
  return (
    <Reader>
      <div>
        {/* ==================== Date, Categories, Tags ====================  */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
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
          {/* ==================== Related ====================  */}
          {showRelated && <ArticleRelated posts={posts} pages={pages}/>}
          
          {/* ==================== Content ====================  */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-evenly',
              marginBottom: '5vh',
              width: '70vw'
            }}> 
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
        
        {/* ==================== Footer ====================  */}
        <Footer />
      </div>
    </Reader>
  )
}


export const query = graphql`
  query getPost($id: String!) {
    allWpPost(filter: {id: { eq: $id }}) {
      nodes {
        id
        title
        content
        date
        uri
        slug
        related {
          pages {
            ... on WpPage {
              id
              uri
              title
            }
          }
          posts {
            ... on WpPost {
              id
              uri
              title
            }
          }
        }
      }
    }
  }
`
