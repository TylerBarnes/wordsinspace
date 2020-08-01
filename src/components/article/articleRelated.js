import React from "react"
import {Link} from "gatsby"

const ArticleRelated = ({pages, posts}) => {
  if (pages.length === 0 && posts.length === 0 ) return null
  
  return (
    <div 
      style={{
        fontSize: '1rem',
        width: '20vw',
        alignSelf: 'flex-end',
        border: '1px solid #ccc'
      }}>

      <h3>Related</h3>
      {pages?.filter(p => p).map(page=> (
        <div 
          style={{ 
            margin: '1vh 0',
            border: '1px dotted #00f'
          }}
          key={page.id} >
          <Link to={page.uri}>{page.title}</Link>
        </div>
      ))}
      
      {posts?.filter(p => p).map(post=> (
        <div 
          style={{ 
            margin: '1vh 0',
            border: '1px dotted #00f'
          }}
          key={post.id} >
          <Link to={post.uri}>{post.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default ArticleRelated
