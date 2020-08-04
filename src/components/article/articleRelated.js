import React from "react"
import {Link} from "gatsby"
import ArticleCategory from "./articleCategory"

const ArticleRelated = ({pages, posts}) => {
  
  if (pages.length === 0 && posts.length === 0 ) return null

  const styles = {
    margin: '1vh 0',
    height: '250px',
    width: '250px',
    border: '1px dashed #513bfd',
    borderRadius: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  } 

  return (
    <div 
      style={{
        width: '250px',
        alignSelf: 'flex-start',
        marginTop: '70vh',
        marginRight: '2vw'
      }}>
      <div 
        className='metadata'
        style={{
          border: '1px solid',
          width: '60px',
          textAlign: 'center'
        }}>
        Related
      </div>
      {pages?.filter(p => p).map(page=> (
        <div 
          style={styles}
          key={page.id} >
          <ArticleCategory categories={page.categories}/>
          <Link className='related-title' to={page.uri}>{page.title}</Link>
        </div>
      ))}
      
      {posts?.filter(p => p).map(post=> (
        <div 
          style={styles}
          key={post.id} >
          <ArticleCategory categories={post.categories}/>
          <Link className='related-title' to={post.uri}>{post.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default ArticleRelated
