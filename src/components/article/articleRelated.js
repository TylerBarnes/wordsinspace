import React from "react"
import {Link} from "gatsby"

const ArticleRelated = ({pages, posts}) => {
  return (
    <div 
      style={{
        fontSize: '1rem',
        width: '20vw',
        alignSelf: 'flex-end',
        border: '1px solid #ccc'
      }}>

      <h3>Related</h3>
      {pages?.map(page=> (
        <div 
          style={{ 
            margin: '1vh 0',
            border: '1px dotted #00f'
          }}
          key={page.id} >
          <Link to={page.uri}>{page.title}</Link>
        </div>
      ))}
      
      {posts?.map(post=> (
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
