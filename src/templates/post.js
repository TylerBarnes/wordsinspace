import React from "react"
import {graphql } from "gatsby"

import Reader from "../layouts/reader"
import ArticleTitle from "../components/article/articleTitle"
import ArticleDate from "../components/article/articleDate"
import ArticleRelated from "../components/article/articleRelated"

export default function postTemplate({ data }) {
  if(!data) return null

  const {title, date, content, related} = data.allWpPost.nodes[0]
  const {posts, pages} = related;
  const showRelated = posts?.length > 0 || pages?.length > 0
  
  return (
    <Reader>
      <div>
        <ArticleTitle title={title}/>
        <ArticleDate date={date}/>
        <div 
          style={{
            border: '1px solid #ccc',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
          }}> 
          <div 
            style={{
              border: '1px solid #ccc',
            }} 
            dangerouslySetInnerHTML={{ __html: content }} />
          {showRelated && <ArticleRelated posts={posts} pages={pages}/>}
        </div>
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
