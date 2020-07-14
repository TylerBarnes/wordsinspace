import React from "react"

const Main = (props) => {

  return (
    <div style={{
      maxHeight: '95vh',
	    padding: '20px 10px',
	    overflow: 'scroll'
    }}>
      {props.children}
    </div>
   )
}

export default Main