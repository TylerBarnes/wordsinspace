import React, {useState} from "react"

import Checkbox from './checkbox'

const Tags = ({tags}) => {

  const sortedTags = tags.filter(tag => tag.name.length > 0).sort((a, b) => a.posts.nodes.length + a.pages.nodes.length < b.posts.nodes.length + b.pages.nodes.length ? 1 : -1)

 	const [checkedItems, setCheckedItems] = useState({}); 

	const handleChange = (e) => {
		const { name, checked } = e.target;
    setCheckedItems({...checkedItems, [name] : checked });
    console.log(checkedItems)
  };

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
			      isSelected={checkedItems[tag.id]}
			      onCheckboxChange={handleChange}
			    />
	     	))}
     </div>
   )
}

export default Tags 