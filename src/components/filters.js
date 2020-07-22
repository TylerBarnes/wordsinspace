import React from "react"
import {Link} from "gatsby" 

import Tags from "./filters/tags"
import Categories from "./filters/categories"

const Filters = ({categories, tags}) => {

  return (
    <div 
      style={{
        borderLeft: '1px solid',
        maxHeight: '93vh', 
        textTransform: 'uppercase',
        padding: '10px',
        overflow: 'scroll',
        fontWeight: '500'
      }}>
      Index
      <div 
        style={{
          margin: '2vh 0'
        }}>
        <Categories categories={categories} />
        <Tags tags={tags}/>
      </div>
    </div>
   )
}

export default Filters