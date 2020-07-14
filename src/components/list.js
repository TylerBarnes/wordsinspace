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

          <Link to={node.slug}> {node.title}</Link>              

          {node.categories && node.categories.nodes.map((category,index_cat)=> {
            return (
            <span
              key={index_cat} 
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
            color: '#aaa',
          }}> {node.date && node.date.slice(0,10)} </div>
          
          <div
          style={{
          margin: '0 0.2vw',
          fontSize: '0.8rem'}}> 
          <em>{node.tags && node.tags.nodes.map((tag, index_tag) => <span key={index_tag}>{index_tag < node.tags.nodes.length-1 ? `${tag.slug}, `.replace(/-|_/, ' ') : `${tag.slug}`.replace(/-|_/, ' ')}</span>)} </em> 
          </div>
        
        </li>
      ))}
    </main>
   )
}

export default List