import React from "react"
import { Link } from "gatsby"
import {useTitle} from "../hooks/useTitle"

const Title = () => {
  const title = useTitle();

  return (
    <div>
      <Link to="/" >
         <div
          style={{
            position: 'absolute',
            width: '35px',
            height: '35px',
            border: '1px solid #513bfd',
            boxSizing: 'border-box',
            borderRadius: '100px',
            marginTop: '5px',
            marginRight: '-7px',
          }}></div>
      </Link>

      <Link
        to="/"
        className='interface'
        style={{
          marginTop: '60px',
        }}
      >
        {title}
      </Link>
    </div>
  )
}

export default Title
