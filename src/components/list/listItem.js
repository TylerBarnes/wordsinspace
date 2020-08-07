import React, {useState} from "react"
import {Link} from "gatsby" 
import Glyph from '../../images/assets/glyph.svg'

import ListTag from "./listTag"
import ListDate from "./listDate"
import ListImage from "./listImage"
import ListCategory from "./listCategory"

const ListItem = ({item, isTagMode, invertedTheme}) => {
  const category=item?.categories?.nodes[0]?.name
  const tags = item?.tags
  const date = item?.date
  const [thumbnail, setThumbnail] = useState('')
  const [isVisible, setIsVisible] = useState(false);
  
  const handleMouseEnter = (e,item) => {
    e.preventDefault()
    setIsVisible(true)
    setThumbnail(!isTagMode
                 ? item?.featuredImage?.node?.localFile?.childImageSharp?.fluid
                 : item?.featuredImage?.node?.guid
                 )
  }  

  const handleMouseLeave = (e) => {
    e.preventDefault()
    setIsVisible(false)
  }

  return (
    <div>  
      <li 
        onMouseEnter={e=>handleMouseEnter(e, item)}
        onMouseLeave={handleMouseLeave}
        style={{
          listStyle: 'none',
          width: '75vw',
          height: 'auto',
          // minHeight: '150px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderStyle: 'dashed none none none',
          borderWidth: '1px',
          borderColor: invertedTheme ? '#fff' : '#513bfd',
          background: isVisible && !invertedTheme 
                      ? 'linear-gradient(90deg, rgba(247,227,229, 0) 0%, rgba(247,227,229, 1) 2%, rgba(247,227,229, 1) 98%, rgba(247,227,229, 0) 100%)'
                      : 'none',
        }}>

        <div 
          style={{
            alignSelf: 'flex-start',
            // width: '50vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
          }}>

          {/* ==================== Date, Categories, Tags ====================  */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'flex-start',
              marginLeft: '40px',
              marginTop: '10px',
            }}>
            {date && <ListDate date={date} invertedTheme={invertedTheme} />}
            {category && category !== 'Uncategorized' && <ListCategory category={category.toLowerCase()} />}
            {tags && <ListTag tags={tags} invertedTheme={invertedTheme} />}
          </div>

          {/* ==================== Title ====================  */}
          <div         
            style={{ 
              width: '55vw',
              margin: '30px 0 40px 0',
              paddingLeft: '20px',
            }}>
            <Link 
              to={item.uri} 
              className={invertedTheme ? 'list-title-inverted' : 'list-title'}>
              {item.title}
              <Glyph />
            </Link> 
          </div>

        </div>

        {/* ==================== Thumbnail ====================  */}
        
      </li>

      <div 
        style={{
          position: 'absolute',
          bottom: '0px',
          right: '20vw',
          width: '27vw',
          margin: 0, 
          padding: 0,
          filter: 'drop-shadow(0px 4.4px 4px rgba(0, 0, 0, 0.25))',
          display: isVisible && !invertedTheme ? 'block' : 'none',
        }}>
        {thumbnail && <ListImage title={item.title} thumbnail={thumbnail} isTagMode={isTagMode}/>}
      </div>
    </div>
  )
}

export default ListItem