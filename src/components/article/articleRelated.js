import React from "react"
import {Link} from "gatsby"
import ArticleCategory from "./articleCategory"

const ArticleRelated = ({related, mobileArticleContent, showRelated}) => {

  if (related.length === 0 || !showRelated) {
    return <div style={{
              width: '250px',
              alignSelf: mobileArticleContent ? 'center' : 'flex-start',
              order: mobileArticleContent ? '2' : '1',
              marginRight: mobileArticleContent ? '0' : '0',
            }}>
          </div>
  }

  const styles = {
    margin: '1vh 0',
    height: '220px',
    width: '220px',
    border: '1px dashed #513bfd',
    borderRadius: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <div
      style={{
        width: '250px',
        alignSelf: mobileArticleContent ? 'center' : 'flex-start',
        order: mobileArticleContent ? '2' : '1',
        marginRight: mobileArticleContent ? '0' : '0vw'
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
      {related?.filter(p => p).map((item,index)=> (
        <div
          style={styles}
          key={index} >
          <ArticleCategory categories={item.categories}/>
          <Link className='related-title' to={item.uri}>{item.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default ArticleRelated
