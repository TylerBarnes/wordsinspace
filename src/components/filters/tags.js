import React, {useState} from "react"

import Checkbox from './checkbox'
import TagsInfoBox from './tagsInfoBox'

const Tags = ({tags, selectTags, clearTags, isTagMode}) => {

  return (
     <div style={{
	      textAlign: 'left',
				fontSize: '0.9rem',
				overflow: 'scroll',
				margin: '2vh 0',
				maxHeight: '70vh',
				border: '1px solid #ccc'
	     }}>
	     	<TagsInfoBox tags={tags} clearTags={clearTags} isTagMode={isTagMode}/>
	      {tags && tags.map((tag, index) => (
					<Checkbox
			      key={index}
			      label={tag.name}
			      isSelected={tag.checked}
			      onCheckboxChange={selectTags}
			    />
	     	))}
     </div>
   )
}

export default Tags 