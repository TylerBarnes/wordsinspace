import React from "react"
import {Link} from "gatsby"
import {useCategories} from "../../hooks/useCategories"

const MobileCategories = () => {
  const categories = useCategories()
  const listStyle = {
  	padding: '0',
  	listStyle: 'none',
  	alignSelf: 'center'
	}
  const catStyle = {
  	margin: '5px 15px 5px 0px',
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
				padding: '0 8vw',
        margin: '0',
			}}>
			<li
				style={listStyle}>
				<Link
        style={catStyle}
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
            style={catStyle}
						to={`/${category.slug}`}
						activeClassName='category-active'
						partiallyActive={true}
						className={`${category.slug}` + " browsetop"}
						>
		      	{category.name}
		      </Link>
				</li>
		 	))}
		</div>
   )
}

export default MobileCategories
