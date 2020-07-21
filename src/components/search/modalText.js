import React from "react"

const ModalText = ({location, searchTerm, hide}) => {
  return (
    <div>
    	<div 
        style={{
          background: 'none',
          outline: 'none',
          border: 'none',
          padding: '5px',
          position: 'fixed',
          right: '11%',
          color: '#fff',
          fontWeight: 500,
          textTransform: 'uppercase'
        }}
        data-dismiss="modal" aria-label="Close" onClick={hide}>Close &times;</div>
      
      <div 
        style={{
          padding: '2vh 0',
          textTransform: 'uppercase',
          color: '#fff',
        }}>
        Results for <strong>{searchTerm}</strong> {location.pathname !== '/work' ? `within ${location.pathname.slice(1)}`: null}
      </div>
    </div>
  )
}

export default ModalText