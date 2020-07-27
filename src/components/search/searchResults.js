import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby" 

const SearchResults = ({items}) => {

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'row wrap', 
        alignItems: 'flex-start',
        justifyContent: 'stretch',
        height: '60vh',
      }}>
        {/* ---------------- LIST ---------------- */}
        <div 
          style={{
            overflow: 'scroll',
            color: '#fff',
            height: 'auto',
          }}>
          {items && items.length>0 && items.map((node, index) => (
            <li 
              key={index}
              style={{
                listStyle: 'none',
                padding: '5px',
              }}>

              <Link 
                style={{color: '#fff'}}
                to={`../${node.slug}`}> 
                <h2>{node.title}</h2>
              </Link>    

              <div 
                style={{
                  margin: '0 0.2vw', 
                  fontSize: '0.8rem',
                  color: '#aaa',
                }}> 
                {node.date && node.date.slice(0,4)} 
              </div>
            </li>
          ))}
          {items && items.length === 0 && 
            (
              <div>
                No results found for this search term.
              </div>
            )}
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