import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby" 

const SearchResults = ({items}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [details, setDetails] = useState('')

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'row wrap', 
        alignItems: 'flex-start',
        justifyContent: 'stretch',
        height: '90vh',
      }}>
        {/* ---------------- LIST ---------------- */}
        <div 
          style={{
            overflow: 'scroll',
          }}>
          {items && items.map((node, index) => (
            <li 
              key={index}
              style={{
                listStyle: 'none',
                padding: '5px',
                color: '#fff',
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