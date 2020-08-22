import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"

const HomeCategory = ({category}) => {
  return (
    <Link to={category?.toLowerCase()}>
      <div className={category?.toLowerCase()}>
        {category}
      </div>
    </Link>
  )
}

export default HomeCategory

HomeCategory.defaultProps = {
  category: ``,
}

HomeCategory.propTypes = {
  category: PropTypes.string,
}