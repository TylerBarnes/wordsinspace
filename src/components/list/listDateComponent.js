import React from "react"

const ListDateComponent = ({date}) => {
  return (
    <div 
      className='interface'
      style={{
        margin: '0 0.2vw', 
        fontSize: '0.8rem',
        color: '#aaa',
        alignSelf: 'flex-start'
      }}> 
      {date.slice(0,4)} 
    </div>
  )
}

export default ListDateComponent