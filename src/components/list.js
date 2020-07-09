import React from "react"
import {Link } from "gatsby" 

const List = (props) => {
  if (!props) return null
  
  return (
     <main style={{
      alignSelf: 'flex-start',
     }}>
      {props.items.sort((a, b) => a.date < b.date ? 1 : -1).map((node, index) => (
        <li key={index} style={{
          listStyle: 'none',
          padding: '5px',
          display: 'flex row',
          width: '40vw',
        }}>
          <Link to={props.fromMain ? `../${node.slug}` : node.slug} state={{ fromMain: false}}> {node.title}</Link>              

          {node.categories && node.categories.nodes.map(category=> {
            return (
            <span
              key={category.name} 
              style={{
                margin: '0 0.2vw', 
                padding: '0.2vh 0.3vw', 
                fontSize: '0.8rem', 
                borderRadius: '10px', 
                border: '1px solid', 
                width: '15%', 
                textAlign: 'center', 
              }}> 
              {category.name}
            </span>)
          })}

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
            color: '#ccc'
          }}> {node.date.slice(0,10)} </div>
        </li>
      ))}
      </main>
   )
}

export default List