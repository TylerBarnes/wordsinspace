import React from "react"
import {Link} from "gatsby" 

import ListTagComponent from "./listTagComponent"
import ListDateComponent from "./listDateComponent"
import ListImageComponent from "./listImageComponent"
import ListCategoryComponent from "./listCategoryComponent"

const ListItem = ({item}) => {
  return (
    <li 
      style={{
        listStyle: 'none',
        padding: '5px',
      }}>

      <Link to={item.uri}> <h1>{item.title}</h1></Link> 
                   
      {item.featuredImage && item.featuredImage.node.localFile.childImageSharp && 
        <ListImageComponent item={item} />
      }
      <ListDateComponent item={item} />
      <ListCategoryComponent item={item} />
      <ListTagComponent item={item} />

    </li>
  )
}

export default ListItem