import React from "react"
import {Link} from "gatsby" 

import Tags from "../tags"
import Categories from "../categories"

const Filters = (props) => {

  return (
    <div 
	    style={{
	      maxHeight: '80vh', 
	      border: '1px solid', 
	      overflow: 'scroll'
	    }}>
      <Categories categories={props.categories} />
      <Tags tags={props.tags} />
    </div>
   )
}

export default Filters