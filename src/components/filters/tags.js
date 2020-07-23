import React, {useState} from "react"

import Checkbox from './checkbox'

const Tags = ({tags, getSelectedTags, selectedTags}) => {

  const sortedTags = tags.filter(tag => tag.name.length > 0)
  											 .filter(hasTags => hasTags.pages.nodes.length>0 || hasTags.posts.nodes.length>0)
  											 .sort((a, b) => a.posts.nodes.length + a.pages.nodes.length < b.posts.nodes.length + b.pages.nodes.length ? 1 : -1)

  return (
     <div style={{
	      textAlign: 'left',
				fontSize: '0.9rem',
				overflow: 'scroll',
				margin: '2vh 0',
				maxHeight: '70vh',
	     }}>
	      {sortedTags && sortedTags.map((tag) => (
					<Checkbox
			      key={tag.id}
			      label={tag.name}
			      isSelected={selectedTags[tag.name]}
			      onCheckboxChange={getSelectedTags}
			    />
	     	))}
     </div>
   )
}

export default Tags 