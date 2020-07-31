import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import {useStaticQuery, Link, useScrollRestoration} from "gatsby" 
import Img from "gatsby-image"

const List = ({loading, items}) => {
  const [isClicked, setIsClicked] = useState(false);
  const ulScrollRestoration = useScrollRestoration(`list-component-ul-list`)

  const togglePreview = (e, index) => {
    e.preventDefault();
    setIsClicked(!isClicked);
  }  

  return (
    <div 
      {...ulScrollRestoration}
      style={{
        display: 'flex',
        flexDirection: 'row wrap', 
        alignItems: 'flex-start',
        justifyContent: 'stretch',
        maxHeight: '92vh',
        overflow: 'auto',
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
          <ul>
            {items && items.map((item, index) => (
              <li 
                key={index}
                style={{
                  listStyle: 'none',
                  padding: '5px',
                }}>

                <Link 
                  to={item.uri}> 
                  <h1>{item.title}</h1>
                </Link>              
                <span  onClick={e=>togglePreview(e,index)} > {isClicked ? 'CLOSE PREVIEW' : 'PREVIEW'} </span>

                <Img
                  fluid={items[10].featuredImage.node.localFile.childImageSharp.fluid}
                  alt="thumbnails"/>

                <div 
                  style={{
                    margin: '0 0.2vw', 
                    fontSize: '0.8rem',
                    color: '#aaa',
                  }}> 
                  {item.date && item.date.slice(0,4)} 
                </div>
                
                <div
                  style={{
                  margin: '0 0.2vw',
                  fontSize: '0.8rem'
                  }}> 
                  {item.tags && item.tags.nodes.map((tag, index_tag) => 
                    <span key={index_tag}>
                      {index_tag < item.tags.nodes.length-1 ? `${tag.slug}, `.replace(/-|_/, ' ') : `${tag.slug}`.replace(/-|_/, ' ')}
                    </span>
                  )}
                </div>

                {/* ---------------- PREVIEW ---------------- */}
                <div 
                  style={{
                    overflow: 'hidden'
                  }}>
                  {isClicked && <div dangerouslySetInnerHTML={{ __html: item.excerpt ? item.excerpt : item.content ? item.content.slice(0,200) : item.title }} />}
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