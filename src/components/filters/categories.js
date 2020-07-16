import React from "react"
import {Link} from "gatsby" 

const Categories = (props) => {
	
	if (props.categories===undefined) return null
  
  return (
     <div style={{
				fontSize: '0.9rem',
				margin: '2vh 0',
      }}>
      	
      	<h4 style={{fontWeight: '600'}}>Categories</h4>

      	<div style={{marginTop: '1vh'}}>
      		<Link to={'/work'} activeStyle={{ color: "red" }} partiallyActive={true}>All</Link>
      	</div>
	      
	      {props.categories.map((category,index) => (
					<li 
						key={index}
						style={{
			      	margin: '2px auto',
            	listStyle: 'none',
						}}		
					>
						<Link to={`/${category.slug}`} activeStyle={{ color: "red" }} partiallyActive={true}>
		        	{category.name} [{category.posts.nodes.length+category.pages.nodes.length}]
		        </Link>
					</li>
	     	))}
     </div>
   )
}

export default Categories 