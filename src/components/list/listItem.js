import React from "react"
import {Link} from "gatsby" 

import ListTagComponent from "./listTagComponent"
import ListDateComponent from "./listDateComponent"
import ListImageComponent from "./listImageComponent"
import ListCategoryComponent from "./listCategoryComponent"

const ListItem = ({item}) => {
  const category=item.categories?.nodes[0]?.name
  const tags = item?.tags
  const date = item?.date
  const thumbnail = item?.featuredImage?.node?.localFile?.childImageSharp?.fluid

  return (
    <li 
      style={{
        listStyle: 'none',
        padding: '5px',
      }}>

      <Link to={item.uri}> <h1>{item.title}</h1></Link> 
                   
      {thumbnail && <ListImageComponent thumbnail={thumbnail} />}
      
      {date && <ListDateComponent date={date} />}
      
      {category && <ListCategoryComponent category={category} />}
      
      {tags && <ListTagComponent tags={tags} />}

    </li>
  )
}

export default ListItem