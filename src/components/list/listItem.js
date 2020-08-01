import React, {useState} from "react"
import {Link} from "gatsby" 

import ListTagComponent from "./listTagComponent"
import ListDateComponent from "./listDateComponent"
import ListImageComponent from "./listImageComponent"
import ListCategoryComponent from "./listCategoryComponent"

const ListItem = ({item}) => {
  const category=item.categories?.nodes[0]?.name
  const tags = item?.tags
  const date = item?.date
  const [thumbnail, setThumbnail] = useState(null)
  const [isVisible, setIsVisible] = useState(false);
  
  const handleMouseEnter = (e) => {
    e.preventDefault()
    setIsVisible(true)
    setThumbnail(item?.featuredImage?.node?.localFile?.childImageSharp?.fluid)
  }  

  const handleMouseLeave = (e) => {
    e.preventDefault()
    setIsVisible(false)
    setThumbnail(null)
  }

  return (
    <li 
      onMouseEnter={handleMouseEnter}
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
                   
      {thumbnail && <ListImageComponent thumbnail={thumbnail} isVisible={isVisible} />}
      
      {date && <ListDateComponent date={date} />}
      
      {category && <ListCategoryComponent category={category} />}
      
      {tags && <ListTagComponent tags={tags} />}

    </li>
  )
}

export default ListItem