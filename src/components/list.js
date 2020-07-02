import React from "react"
import {Link } from "gatsby" 

function List(props) {
  return (
     <main>
      {props.merged.sort((a, b) => a.date < b.date ? 1 : -1).map((node, index) => (
          <li key={index} style={{
            listStyle: 'none',
            padding: '5px',
            display: 'flex row',
            border: '1px solid #eee'
          }}>
            <Link to={node.slug}> {node.title}</Link>              
            
            <div 
              style={{
                margin: '0 0.2vw', 
                fontSize: '0.8rem'}}> <em>{node.nodeType} </em> </div>
            
            <div 
              style={{
                margin: '0 0.2vw', 
                fontSize: '0.8rem', 
                textAlign: 'right',
              }}> {node.childPages && node.childPages.nodes.length > 0 ? node.childPages.nodes.length : null}</div>

            <div style={{
              margin: '0 0.2vw', 
              fontSize: '0.8rem',
            }}> {node.date.slice(0,10)} </div>
          </li>
        ))}
      </main>
   )
}

export default List