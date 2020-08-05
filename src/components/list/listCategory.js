import React from "react"

const ListCategory = ({category}) => {
  return (
    <div 
      className={category}
      style={{
        margin: '0 0.2vw', 
        fontSize: '0.8rem',
        alignSelf: 'flex-start'
      }}> 
      {category}
    </div>
  )
}

export default ListCategory