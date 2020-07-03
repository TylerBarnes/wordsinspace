import React from "react"

function Tags(props) {
	
  return (
     <aside style={{
      alignSelf: 'flex-start',
      textAlign: 'left',
			width: `40%`,
			fontSize: '0.9rem',
     }}>
				<div style={{opacity: '0.7'}} onClick={props.doClear}>clear all</div>
	      {props.tags.map( tag => (
					<li 
					key={tag.name}
					style={{
			      margin: '10px auto',
            listStyle: 'none',
					}}		
					>
						<label>
		          <input
		            value={tag.name}
		            type='radio'
		            checked={tag.name === props.selectedTag}
		            onChange={props.doChange}
		            style={{
						      height: '8px', 
						      margin: '2px',
								}}
		          />
		          {tag.name}
		        </label>
					</li>
	     	))}
     </aside>
   )
}

export default Tags 