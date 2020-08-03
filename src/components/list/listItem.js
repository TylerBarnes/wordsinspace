import React, {useState} from "react"
import {Link} from "gatsby" 

import ListTagComponent from "./listTagComponent"
import ListDateComponent from "./listDateComponent"
import ListImageComponent from "./listImageComponent"
import ListCategoryComponent from "./listCategoryComponent"

const ListItem = ({item, isTagMode}) => {
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
      onMouseEnter={e=>handleMouseEnter(e, item)}
      onMouseLeave={handleMouseLeave}
      style={{
        listStyle: 'none',
        border: '1px solid #ccc', 
        width: '75vw',
        height: '150px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>

      <div 
        style={{
          alignSelf: 'flex-start',
          width: '50vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          border: '1px solid',
        }}>

        {/* ==================== Date, Categories, Tags ====================  */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
          }}>
          {date && <ListDateComponent date={date} />}
          {category && category !== 'Uncategorized' && <ListCategoryComponent category={category} />}
          {tags && <ListTagComponent tags={tags} />}
        </div>

        {/* ==================== Title ====================  */}
        <div         
          style={{ 
            width: '50vw',
            border: '1px solid',
            margin: '20px 0'
          }}>
          <Link 
            to={item.uri} 
            className='list-title'>
            {item.title}
          </Link> 
        </div>
      </div>

      {/* ==================== Thumbnail ====================  */}
      <div 
        style={{
          alignSelf: 'flex-start',
          width: '150px',
          margin: 0, 
          padding: 0,
          display: isVisible ? 'block' : 'block',
        }}>
        {thumbnail && <ListImageComponent title={item.title} thumbnail={thumbnail} isTagMode={isTagMode}/>}
      </div>

    </li>
  )
}

export default ListItem