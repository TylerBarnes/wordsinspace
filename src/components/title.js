import React from "react"
import { Link } from "gatsby"
import {useTitle} from "../hooks/useTitle"

const Title = () => {
  const title = useTitle();
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
        {title}
      </Link>
    </h4>
  )
}

export default Title