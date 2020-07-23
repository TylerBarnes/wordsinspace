import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby" 

const List = ({items}) => {
  const [isClicked, setIsClicked] = useState(false);
  const sortedItems = items.sort( (a, b) => a.date > b.date)

  const togglePreview = (e, index) => {
    e.preventDefault();
    setIsClicked(!isClicked);
  }  

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'row wrap', 
        alignItems: 'flex-start',
        justifyContent: 'stretch',
        maxHeight: '92vh',
        overflow: 'scroll',
        width: '80vw'
      }}>
        {/* ---------------- LIST ---------------- */}
        <div 
          style={{
          }}>
          {sortedItems && sortedItems.map((node, index) => (
            <li 
              key={index}
              style={{
                listStyle: 'none',
                padding: '5px',
              }}>

              <Link 
                to={`../${node.slug}`}> 
                <h1>{node.title}</h1>
              </Link>              
              <span  onClick={e=>togglePreview(e,index)} > {isClicked ? 'CLOSE PREVIEW' : 'PREVIEW'} </span>

              <div 
                style={{
                  margin: '0 0.2vw', 
                  fontSize: '0.8rem',
                  color: '#aaa',
                }}> 
                {node.date && node.date.slice(0,4)} 
              </div>
              
              <div
                style={{
                margin: '0 0.2vw',
                fontSize: '0.8rem'
                }}> 
                {node.tags && node.tags.nodes.map((tag, index_tag) => 
                  <span key={index_tag}>
                    {index_tag < node.tags.nodes.length-1 ? `${tag.slug}, `.replace(/-|_/, ' ') : `${tag.slug}`.replace(/-|_/, ' ')}
                  </span>
                )}
              </div>

              {/* ---------------- PREVIEW ---------------- */}
              <div 
                style={{
                  overflow: 'hidden'
                }}>
                {isClicked && <div dangerouslySetInnerHTML={{ __html: node.excerpt ? node.excerpt : node.content ? node.content.slice(0,200) : node.title }} />}
              </div>
            </li>
          ))}
        </div>
    </div>
   )
}


List.propTypes = {
  items: PropTypes.array,
}

List.defaultProps = {
  items: [],
}

export default List