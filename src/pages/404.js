import React from "react"

import SEO from "../components/seo"
import Home from "../components/layouts/home"

const NotFoundPage = () => (
  <Home>
    <SEO title="404: Not found" />
    <h3>NOT FOUND</h3>
    <p>Oops. This URL doesn't go anywhere. Oh well, there are worse things in life.</p>
  </Home>
)

export default NotFoundPage
