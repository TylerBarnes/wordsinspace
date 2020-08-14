import React from "react"
import {Link} from "gatsby"
import ArticleCategory from "./articleCategory"
import Sticker_Related from '../../images/assets/Sticker_Related.svg'

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
    position: 'absolute',
    top: '0',
    margin: '30px 0 0 0',
    height: '250px',
    width: '265px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: '250px',
  }

  return (
    <div
      style={{
        width: '250px',
        alignSelf: mobileArticleContent ? 'center' : 'flex-start',
        order: mobileArticleContent ? '2' : '1',
        margin: mobileArticleContent ? '0' : '0 2vw',
        display: mobileArticleContent ? 'auto' : 'flex',
        flexFlow: mobileArticleContent ? 'auto' : 'column',
        alignItems: mobileArticleContent ? 'auto' : 'center',
      }}>
      <div
        className='metadata'
        style={{
          border: '1px solid',
          width: '60px',
          textAlign: 'center',
          alignSelf: 'flex-start',
        }}>
        Related
      </div>
      {related?.filter(p => p).map((item,index)=> (
      <div 
        key={index} 
        style={{
        position: 'relative',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
      }}>
        <div className='related-item'
          style={styles}>
          <ArticleCategory categories={item.categories}/>
          <Link lang='de' className='related-title' to={item.uri}>{item.title}</Link>
          <div style={{
            flex: '0 2 95px',
            width: '250px',
          }}>
          </div>
        </div>
        <Sticker_Related id='sticker-related' />
      </div>
      ))}
    </div>
  )
}

export default ArticleRelated
