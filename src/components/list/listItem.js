import React, {useState} from "react"
import {Link} from "gatsby"
import GlyphFilled from '../../images/assets/glyph_filled.svg'

import ListTag from "./listTag"
import ListDate from "./listDate"
import ListImage from "./listImage"
import ListCategory from "./listCategory"

const ListItem = ({item, isTagMode, invertedTheme, mobileList, listWidth, listTitleWidth}) => {
  const category=item?.categories?.nodes[0]?.name
  const categoryClass = item?.categories?.nodes[0]?.name.toLowerCase()
  const tags = item?.tags
  const date = item?.date
  const slug = item?.slug

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

  if (slug === 'about') return null

  return (
    <li
      key={item.id}
      className={(categoryClass + "Item" + ' list-item')}
      onMouseEnter={e=>handleMouseEnter(e, item)}
      onMouseLeave={handleMouseLeave}
      style={{
        listStyle: 'none',
          width: listWidth,
          height: 'auto',
          marginRight: '1vw',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          flexGrow: '1',
          justifyContent: 'space-between',
          borderStyle: 'dashed none none none',
          borderWidth: '1px',
          borderColor: invertedTheme ? '#fff' : '#513bfd',
      }}>

      <div
        style={{
          alignSelf: 'flex-start',
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
            margin: mobileList ? '10px 0 0 0' :'1vh 0 0 2vh',
          }}>
          {date && <ListDate date={date} invertedTheme={invertedTheme} />}
          {category && category !== 'Uncategorized' && <ListCategory category={category.toLowerCase()} />}
          {tags && !mobileList && <ListTag tags={tags} invertedTheme={invertedTheme} />}
        </div>

        {/* ==================== Title ====================  */}
        <div
          style={{
            width: listTitleWidth,
            margin: mobileList ? '15px 0' : '2vh 0 4vh 0',
            paddingLeft: mobileList ? '0' : '20px',
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
    </li>
  )
}

export default ListItem
