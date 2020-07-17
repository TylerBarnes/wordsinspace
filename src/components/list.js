import React, {useState} from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby" 

const List = ({items}) => {

  const [isClicked, setIsClicked] = useState(false);
  const [details, setDetails] = useState('')
  
  const handleClick = (e, index) => {
    e.preventDefault();
    setIsClicked(true);
    setDetails(`
      <div>${items[index].content}</div>
    `)
  }  

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'row wrap', 
        alignItems: 'flex-start',
        justifyContent: 'stretch',
        height: '90vh',
      }}>
      
        {/* ---------------- LEFT SIDE LIST ---------------- */}
        <div 
          style={{
            flexGrow: '2',
            height: '90vh',
            overflow: 'scroll',
            padding: '10px'
          }}>
          {items.sort((a, b) => a.date < b.date ? 1 : -1).map((node, index) => (
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
              <span  onClick={e=>handleClick(e,index)} > PREVIEW </span>
              
              <div 
                style={{
                  margin: '0 0.2vw', 
                  fontSize: '0.8rem', 
                  fontStyle: 'italic', 
                  display: 'none'
                }}> 
                {node.nodeType}
              </div>

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
            </li>
          ))}
        </div>

        {/* ---------------- RIGHT SIDE PREVIEW ---------------- */}
        <div 
          style={{
            width: isClicked ? '40vw' : '0',
            height: '90vh',
            overflow: 'hidden',
            padding: '10px 20px'
          }}>
          {isClicked && <div dangerouslySetInnerHTML={{ __html: details }} />}
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