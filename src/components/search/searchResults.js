import React from "react"
import PropTypes from "prop-types"

import ListItem from "../list/listItem"

const SearchResults = ({items}) => {
  return (
    <div className="no-scroll search-results"
      style={{
        display: 'flex',
        flexDirection: 'row wrap',
        alignItems: 'flex-start',
        justifyContent: 'stretch',
        maxHeight: '65vh',
        paddingTop: '4vh',
        overflow: 'auto',
      }}>
        {/* ---------------- LIST ---------------- */}
        <div
          style={{
            overflow: 'scroll',
            color: '#fff',
            height: 'auto',
            paddingBottom: '2vh',
            borderBottom: '1px solid #fff',
          }}>

          {items && items.length === 0 &&
            <div className='metadata' style={{color: '#fff'}}>
              No results found for this search term.
            </div>
          }
          {items && items.map((item, index) => (
            <ListItem
              key={index}
              item={item}
              isTagMode={false}
              invertedTheme={true}
              />
          ))}
        </div>
    </div>
   )
}


SearchResults.propTypes = {
  items: PropTypes.array,
}

SearchResults.defaultProps = {
  items: [],
}

export default SearchResults
