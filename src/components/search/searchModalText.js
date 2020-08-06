import React from "react"

const SearchModalText = ({resultsCount, catName, searchTerm, hide}) => {
  return (
    <div>
    	<div
        style={{
          background: 'none',
          outline: 'none',
          border: '1px solid #fff',
          padding: '5px',
          margin: '5px 0',
          position: 'relative',
          float: 'right',
          color: '#fff',
          textTransform: 'uppercase'
        }}
        className='metadata'
        data-dismiss="modal" 
        aria-label="Close" 
        onClick={hide}>
          Close &times;
        </div>
      
      <div 
        className='metadata'
        style={{
          padding: '2vh 0',
          textTransform: 'uppercase',
          color: '#fff',
        }}>
        {resultsCount} Results for <strong>{searchTerm}</strong> {catName === '' ? '' : `under ${catName}`}
      </div>
    </div>
  )
}

export default SearchModalText