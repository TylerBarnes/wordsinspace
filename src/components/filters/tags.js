import React, {useState} from "react"

import Checkbox from './checkbox'
import TagsInfoBox from './tagsInfoBox'

const Tags = ({tags, selectTags, clearTags, isTagMode}) => {
	const topTags = tags.slice(0,20)
  
  return (
   <div 
	   	style={{
		    textAlign: 'left',
				overflowY: 'scroll',
				overflowX: 'hidden',
				maxHeight: '45vh'
	    }}>
     	<TagsInfoBox tags={tags} clearTags={clearTags} isTagMode={isTagMode}/>
      
      {tags && tags.map((tag, index) => (
				<Checkbox
		      key={index}
		      label={tag.name}
		      count={tag.pages.nodes.length + tag.posts.nodes.length}
		      isSelected={tag.checked}
		      onCheckboxChange={selectTags}
		    />
     	))}


   </div>
  )
}

export default Tags 