import React from "react"
import {Link} from "gatsby"
import {useCategories} from "../../hooks/useCategories"

const MobileCategories = () => {
  const categories = useCategories()
  const listStyle = {
  	margin: '5px',
  	listStyle: 'none',
  	alignSelf: 'center'
	}

  return (
		<div
			style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
				height: '40px',
				padding: '5px',
        margin: '0 0 1vh 0'
			}}>
			<li
				style={listStyle}>
				<Link
					style={listStyle}
					to={'/work'}
					activeClassName='category-active'
					partiallyActive={true}
					className='work'
					>
					All
				</Link>
			</li>
		  {categories.sort((a,b) => a.name < b.name).map((category,index) => (
				<li
					key={index}
					style={listStyle}
					>
					<Link
						to={`/${category.slug}`}
						activeClassName='category-active'
						partiallyActive={true}
						className={`${category.slug}`}
						>
		      	{category.name}
		      </Link>
				</li>
		 	))}
		</div>
   )
}

export default MobileCategories
