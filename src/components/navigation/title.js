import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Title = ({ siteTitle }) => {
  return (
    <h4>
      <Link
        to="/"
        style={{
          color: `#000`,
          textDecoration: `none`,
          textTransform: 'uppercase',
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