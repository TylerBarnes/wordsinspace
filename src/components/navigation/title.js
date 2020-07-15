import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Title = ({ siteTitle }) => {
  
  // Home = Title is expanded and shows search

  // Category = Title is collapsed to the left, search is hidden

  // Browser+Reader = Title is collapsed to the left, search is hidden

  // Reader = Title is collapsed to the left, search is hidden

  return (
    <h4>
      <Link
        to="/"
        style={{
          color: `#000`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h4>
  )
}

Title.propTypes = {
  siteTitle: PropTypes.string,
}

Title.defaultProps = {
  siteTitle: ``,
}

export default Title