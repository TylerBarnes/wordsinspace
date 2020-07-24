import React from "react"
import {Link} from "gatsby" 
import {useCategories} from "../../hooks/useCategories"

const Categories = () => {
  const categories = useCategories()

  return (
		<div style={{
			fontSize: '0.9rem',
			margin: '2vh 0',
		}}>
			<div style={{marginTop: '1vh'}}>
				<Link to={'/work'} activeStyle={{ color: "red" }} partiallyActive={true}>All</Link>
			</div>
		  
		  {categories.sort((a,b) => a.name < b.name).map((category,index) => (
				<li 
					key={index}
					style={{
		      	margin: '2px auto',
		      	listStyle: 'none',
					}}		
				>
					<Link to={`/${category.slug}`} activeStyle={{ color: "red" }} partiallyActive={true}>
		      	{category.name}
		      </Link>
				</li>
		 	))}
		</div>
   )
}

export default Categories 