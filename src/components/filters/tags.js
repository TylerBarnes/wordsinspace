import React, {useState} from "react"

import Checkbox from './checkbox'
import TagsInfoBox from './tagsInfoBox'

const Tags = ({tags, getSelectedTags, selectedTags, clearTags}) => {

  return (
     <div style={{
	      textAlign: 'left',
				fontSize: '0.9rem',
				overflow: 'scroll',
				margin: '2vh 0',
				maxHeight: '70vh',
	     }}>
	     	<TagsInfoBox selectedTags={selectedTags} clearTags={clearTags}/>
	      {tags && tags.map((tag, index) => (
					<Checkbox
			      key={index}
			      label={selectedTags[index].name}
			      isSelected={selectedTags[index]}
			      onCheckboxChange={getSelectedTags}
			    />
	     	))}
     </div>
   )
}

export default Tags 