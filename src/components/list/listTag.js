import React from "react"

const ListTag = ({tags, invertedTheme}) => {
  return (
    <div
      style={{
        alignSelf: 'flex-start',
        'margin': '0px 5px 0px 20px',
      }}>
      {tags.nodes.map((tag, index_tag) =>
        <span
          className={invertedTheme ? 'tag tag-inverted' : 'tag'}
          key={index_tag}>
          {tag.name}
        </span>
      )}
    </div>
  )
}

export default ListTag
