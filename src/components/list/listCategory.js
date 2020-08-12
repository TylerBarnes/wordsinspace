import React from "react"

const ListCategory = ({category}) => {
  return (
    <div 
      className={category}
      style={{
        margin: '1px 5px 0px 20px', 
        alignSelf: 'flex-start'
      }}> 
      {category}
    </div>
  )
}

export default ListCategory