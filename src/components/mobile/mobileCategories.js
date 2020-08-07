import React from "react"
import {Link} from "gatsby" 
import {useCategories} from "../../hooks/useCategories"

const MobileCategories = () => {
  const categories = useCategories()

  return (
		<div 
			style={{
        display: 'flex',
        flexDirection: 'column nowrap',
        justifyContent: 'space-around',
				margin: '2vh 0',
			}}>
			<Link 
				to={'/work'} 
				activeClassName='category-active'
				partiallyActive={true}
				className='work'
				>
				All
			</Link>
		  {categories.sort((a,b) => a.name < b.name).filter(cat=>cat.name !== 'Uncategorized').map((category,index) => (
				<li 
					key={index}
					style={{
		      	margin: '15px',
		      	listStyle: 'none',
					}}		
				>
					<Link 
						to={`/${category.slug}`} 
						activeClassName='category-active'
						partiallyActive={true}
						className={category.slug}
						>
		      	{category.name}
		      </Link>
				</li>
		 	))}
		</div>
   )
}

export default MobileCategories 