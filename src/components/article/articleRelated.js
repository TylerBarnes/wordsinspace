import React from "react"
import {Link} from "gatsby"
import ArticleCategory from "./articleCategory"
import Sticker_Related from '../../images/assets/Sticker_Related.svg'

const ArticleRelated = ({related, mobileArticleContent, showRelated}) => {

  if ( related === undefined || related === null || related.length === 0 || !showRelated) {
    return <div style={{
              width: '200px',
              alignSelf: mobileArticleContent ? 'center' : 'flex-start',
              order: mobileArticleContent ? '2' : '1',
              marginRight: mobileArticleContent ? '0' : '0',
            }}>
          </div>
  }

  const styles = {
    position: 'absolute',
    top: '0',
    margin: '20px 0 0 0',
    height: '200px',
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: '250px',
    zIndex: '1',
    wordWrap: 'break-all'
  }

  return (
    <div
      style={{
        width: '200px',
        alignSelf: mobileArticleContent ? 'center' : 'flex-start',
        order: mobileArticleContent ? '2' : '1',
        margin: mobileArticleContent ? '0' : '60vh 2vw 0 2vw',
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
        margin: '1vh 0vh',
        height: '200px',
      }}>
        <div
          className='related-item'
          style={styles}>
          <ArticleCategory categories={item.categories}/>
          <Link className='related-title' to={item.uri}> {item.title} </Link>
          <div style={{
            flex: '0 2 70px',
            width: '200px',
            height: '200px',
          }}>
          </div>
        </div>
         <Sticker_Related style={{ width: '200px', }} id='sticker-related' />
      </div>
      ))}
    </div>
  )
}

export default ArticleRelated
