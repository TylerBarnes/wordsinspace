import React, {useState} from "react"
import {Link} from "gatsby" 
import { gql, useQuery } from '@apollo/client'

import ListTagComponent from "./listTagComponent"
import ListDateComponent from "./listDateComponent"
import ListImageComponent from "./listImageComponent"
import ListCategoryComponent from "./listCategoryComponent"

// The GraphQL query containing the search term, will be sent to Apollo
const THUMBNAIL_QUERY = gql`
  query ThumbnailQuery($titleName: String!) {
    pages(where: {title: $titleName}) {
      nodes {
        title
        featuredImage {
          node {
            mediaDetails {
              file
            }
          }
        }
      }
    }
  }
`

const ListItem = ({item}) => {
  const category=item.categories?.nodes[0]?.name
  const tags = item?.tags
  const date = item?.date
  const [thumbnail, setThumbnail] = useState(null)
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('')
  
  const {loading, error, data} = useQuery(THUMBNAIL_QUERY, {
    variables: { titleName: title},
    skip: true
  })
  console.log(data)

  const handleMouseEnter = (e, title) => {
    e.preventDefault()
    setIsVisible(true)
    setTitle(title)
  }  

  const handleMouseLeave = (e) => {
    e.preventDefault()
    setIsVisible(false)
    setThumbnail(null)
  }

  return (
    <li 
      onMouseEnter={e=>handleMouseEnter(e, item.title)}
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