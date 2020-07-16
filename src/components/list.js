import React from "react"
import {Link } from "gatsby" 

const List = (props) => {
  if (!props) return null
  return (
    <div>
      {props.items.sort((a, b) => a.date < b.date ? 1 : -1).map((node, index) => (
        
        <li key={index} 
          style={{
            listStyle: 'none',
            padding: '5px',
            display: 'flex row',
            width: '80%'
          }}>
          
          <Link to={`../${node.slug}`}> 
            <h1>{node.title}</h1>
          </Link>              
          
          <div 
            style={{
              margin: '0 0.2vw', 
              fontSize: '0.8rem', 
              fontStyle: 'italic', 
            }}> 
            {node.nodeType}
          </div>

          <div style={{
            margin: '0 0.2vw', 
            fontSize: '0.8rem',
            color: '#aaa',
          }}> 
            {node.date && node.date.slice(0,4)} 
          </div>
          
          <div
            style={{
            margin: '0 0.2vw',
            fontSize: '0.8rem'}}
            > 
            {node.tags && node.tags.nodes.map((tag, index_tag) => 
              <span key={index_tag}>
                {index_tag < node.tags.nodes.length-1 ? `${tag.slug}, `.replace(/-|_/, ' ') : `${tag.slug}`.replace(/-|_/, ' ')}
              </span>
            )}
          </div>
        
        </li>
      ))}
    </div>
   )
}

export default List