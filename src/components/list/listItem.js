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
    console.log(thumbnail)
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
        border: '1px solid #ccc'
      }}>

      <Link to={item.uri}>
        <h3 
          style={{
            border: '1px solid #ccc',
          }} >{item.title}</h3>
      </Link> 
                   
      {thumbnail && <ListImageComponent title={item.title} thumbnail={thumbnail} isVisible={isVisible} isTagMode={isTagMode}/>}
      
      {date && <ListDateComponent date={date} />}
      
      {category && <ListCategoryComponent category={category} />}
      
      {tags && <ListTagComponent tags={tags} />}

    </li>
  )
}

export default ListItem