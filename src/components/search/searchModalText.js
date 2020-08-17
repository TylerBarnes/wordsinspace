import React, {useState} from "react"
import Close_search from '../../images/assets/close_search.svg'

const SearchModalText = ({resultsCount, catName, searchTerm, hide}) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div>
    	<div
        role='button'
        tabIndex={0}
        style={{
          outline: 'none',
          padding: '5px',
          margin: '5px 0',
          position: 'relative',
          float: 'right',
          color: isHovered ? '#464668' : '#FF7167',
          textTransform: 'uppercase',
          cursor: 'pointer'
        }}
        className='metadata'
        data-dismiss="modal"
        aria-label="Close"
        onMouseEnter={e=>setIsHovered(true)}
        onMouseLeave={e=>setIsHovered(false)}
        onKeyPress={hide}
        onClick={hide}>
          <Close_search />
        </div>

      <div
        className='metadata'
        style={{
          textTransform: 'uppercase',
          color: '#fff',
        }}>
        {resultsCount} Results for <strong>{searchTerm}</strong> {catName === '' ? '' : `under ${catName}`}
      </div>
    </div>
  )
}

export default SearchModalText
