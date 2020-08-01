import React from "react"

const ArticleTitle = ({title}) => {
  return (
    <div 
      style={{
        fontSize: '4rem',
        lineHeight: '4rem',
        margin: '1vh 0',
        border: '1px solid #ccc'
      }}>
      {title}
    </div>
  )
}

export default ArticleTitle