import React, {useState} from "react"

import Checkbox from './checkbox'
import TagsInfoBox from './tagsInfoBox'

const Tags = ({tags, selectTags, clearTags, isTagMode}) => {

  return (
     <div className="no-scroll" 
     	style={{
	    textAlign: 'left',
			overflowY: 'scroll',
			overflowX: 'hidden',
			height: '65vh',
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