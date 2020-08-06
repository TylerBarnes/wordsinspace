import React, {useState} from "react"
import {Link} from "gatsby" 
import GlyphFilled from '../../images/assets/glyph_filled.svg'

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
    <li 
      className='list-item'
      onMouseEnter={e=>handleMouseEnter(e, item)}
      onMouseLeave={handleMouseLeave}
      style={{
        listStyle: 'none',
        width: '75vw',
        height: 'auto',
        minHeight: '150px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderStyle: 'dashed none none none',
        borderColor: invertedTheme ? '#fff' : '#513bfd',
        background: isVisible && !invertedTheme 
                    ? '#F7E3E5' 
                    : 'none',
      }}>

      <div 
        style={{
          alignSelf: 'flex-start',
          width: '50vw',
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
          }}>
          {date && <ListDate date={date} invertedTheme={invertedTheme} />}
          {category && category !== 'Uncategorized' && <ListCategory category={category.toLowerCase()} />}
          {tags && <ListTag tags={tags} invertedTheme={invertedTheme} />}
        </div>

        {/* ==================== Title ====================  */}
        <div         
          style={{ 
            width: '50vw',
            margin: '20px 0'
          }}>
          <Link 
            to={item.uri} 
            className={invertedTheme ? 'list-title-inverted' : 'list-title'}>
            {item.title}
            <GlyphFilled />
          </Link> 
        </div>

      </div>

      {/* ==================== Thumbnail ====================  */}
      <div 
        style={{
          alignSelf: 'flex-start',
          width: '200px',
          height: '200px',
          margin: 0, 
          padding: 0,
          display: isVisible && !invertedTheme ? 'block' : 'none',
        }}>
        {thumbnail && <ListImage title={item.title} thumbnail={thumbnail} isTagMode={isTagMode}/>}
      </div>
    </li>
  )
}

export default ListItem