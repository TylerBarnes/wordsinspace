import React, {useState} from "react"

const SearchModalText = ({resultsCount, catName, searchTerm, hide}) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div>
    	<div
        style={{
          outline: 'none',
          border: '1px dotted #fff',
          padding: '5px',
          margin: '5px 0',
          position: 'relative',
          float: 'right',
          color: isHovered ? '#6262F4' : '#fff',
          background: isHovered ? '#fff' : 'transparent',
          textTransform: 'uppercase',
          cursor: 'pointer'
        }}
        className='metadata'
        data-dismiss="modal" 
        aria-label="Close" 
        onMouseEnter={e=>setIsHovered(true)}
        onMouseLeave={e=>setIsHovered(false)}
        onClick={hide}>
          Close
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