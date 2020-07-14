import React from "react"
import {Link } from "gatsby" 

const List = (props) => {
  if (!props) return null
  
  return (
    <main style={{
      maxHeight: '80vh', 
      border: '1px solid', 
      overflow: 'scroll'
    }}>

      {props.items.sort((a, b) => a.date < b.date ? 1 : -1).map((node, index) => (
        <li key={index} style={{
          listStyle: 'none',
          padding: '5px',
          display: 'flex row',
          width: '40vw',
        }}>

          <Link to={node.slug}> {node.title}</Link>              

          <div 
            style={{
              margin: '0 0.2vw', 
              fontSize: '0.8rem', 
              fontStyle: 'italic'}}
            > 
              {node.nodeType}
          </div>

          <div style={{
            margin: '0 0.2vw', 
            fontSize: '0.8rem',
            color: '#aaa',
          }}> {node.date.slice(0,10)} </div>

          <div
          style={{
          margin: '0 0.2vw',
          fontSize: '0.8rem'}}> 
          <em>{node.tags.nodes.map((tag, index) => <span>{index < node.tags.nodes.length-1 ? `${tag.slug}, `.replace(/-|_/, ' ') : `${tag.slug}`.replace(/-|_/, ' ')}</span>)} </em> 
          </div>
        
        </li>
      ))}
    </main>
   )
}

export default List