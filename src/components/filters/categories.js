import React from "react"
import {Link} from "gatsby" 
import {useCategories} from "../../hooks/useCategories"

const Categories = () => {
  const categories = useCategories()

  return (
		<div style={{
			margin: '2vh 0',
		}}>
			<Link 
				to={'/work'} 
				activeClassName='category-active'
				partiallyActive={true}
				className='work'
				>
				<span className='rd'></span>
				All
			</Link>
		  {categories.sort((a,b) => a.name < b.name).map((category,index) => (
				<li 
					key={index}
					style={{
		      	margin: '0px 0',
		      	listStyle: 'none',
					}}		
					>
					<Link 
						to={`/${category.slug}`} 
						activeClassName='category-active'
						partiallyActive={true}
						className={category.slug}
						>
						<span className='rd'></span>
		      	{category.name}
		      </Link>
				</li>
		 	))}
		</div>
   )
}

export default Categories 