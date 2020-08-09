import React from "react"
import { Link } from "gatsby"
import {useTitle} from "../hooks/useTitle"

const Title = () => {
  const title = useTitle();
  
  return (
    <div>
      <div 
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          border: '1px solid #513bfd',
          boxSizing: 'border-box',
          borderRadius: '100px',
          marginTop: '10px',
        }}>
      </div>
        
      <Link
        to="/"
        className='interface'
        style={{
          marginTop: '80px',
        }}
      >
        {title}
      </Link>
    </div>
  )
}

export default Title