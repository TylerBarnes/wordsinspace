import React from "react"

const ListDateComponent = ({item}) => {
  return (
    <div 
      style={{
        margin: '0 0.2vw', 
        fontSize: '0.8rem',
        color: '#aaa',
      }}> 
      {item.date && item.date.slice(0,4)} 
    </div>
  )
}

export default ListDateComponent