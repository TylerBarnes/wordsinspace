import React from "react"
import {Link} from "gatsby" 

import MobileCategories from "./mobileCategories"

const MobileFilters = () => {

  return (
    <div 
      style={{
        textTransform: 'uppercase',
        overflow: 'scroll',
        fontWeight: '500',
      }}>
        <MobileCategories />
    </div>
   )
}

export default MobileFilters