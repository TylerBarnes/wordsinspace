import React from "react"
import {Link} from "gatsby"
import {useCategories} from "../../hooks/useCategories"

const MobileCategories = () => {
  const categories = useCategories()
  const listStyle = {
  	padding: '5px 15px 5px 0px',
  	listStyle: 'none',
  	alignSelf: 'center'
	}

  return (
		<div
			style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
				height: '60px',
				padding: '0 30px',
        margin: '-10px 0 5px 0'
			}}>
			<li
				style={listStyle}>
				<Link
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
