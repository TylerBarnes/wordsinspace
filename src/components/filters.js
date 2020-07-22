import React from "react"
import {Link} from "gatsby" 

import Tags from "./filters/tags"
import Categories from "./filters/categories"

const Filters = () => {

  return (
    <div 
      style={{
        borderLeft: '1px solid',
        maxHeight: '93vh', 
        textTransform: 'uppercase',
        padding: '10px',
        overflow: 'scroll'
      }}>
      Index
      <div 
        style={{
          margin: '2vh 0'
        }}>
        <Categories />
        <Tags />
      </div>
    </div>
   )
}

export default Filters