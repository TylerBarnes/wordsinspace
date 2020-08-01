import React from "react"
import {Link} from "gatsby"

const ArticleRelated = ({pages, posts}) => {
  return (
    <div 
      style={{
        margin: '2vh 0',
        fontSize: '1rem',
        opacity: '0.5',
        border: '1px solid #ccc'
      }}>

      <h3>Related pages</h3>
      {pages?.map(page=> (
        <div key={page.id} >
          <Link to={page.uri}>{page.title}</Link>
        </div>
      ))}
      
      <h3>Related posts</h3>
      {posts?.map(post=> (
        <div key={post.id} >
          <Link to={post.uri}>{post.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default ArticleRelated
