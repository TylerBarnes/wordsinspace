import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import {Link, useScrollRestoration} from "gatsby" 

const List = ({loading, items}) => {
  const [isClicked, setIsClicked] = useState(false);
  const sortedItems = items.sort( (a, b) => a.date > b.date)
  const ulScrollRestoration = useScrollRestoration(`list-component-ul-list`)
  console.log(ulScrollRestoration)
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
        {/* ---------------- LOADING ---------------- */}
        {loading && 
          <h4 
            style={{
              padding: '5px'
            }}>
            FILTERING CONTENT...
          </h4>
        }
        
        {/* ---------------- LIST ---------------- */}
        {!loading &&
          <ul {...ulScrollRestoration} style={{overflow: 'auto'}}>
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
          </ul>
        }
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