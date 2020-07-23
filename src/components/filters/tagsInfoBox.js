import React from "react"

const TagsInfoBox = ({selectedTags, clearTags}) => {
  return (
    <div>
    	<div>Selected tags: </div>
      <button onClick={clearTags}>Clear all</button>
    </div>
  )
}

export default TagsInfoBox