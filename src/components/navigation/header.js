import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header