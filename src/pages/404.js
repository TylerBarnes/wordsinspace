import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h3>NOT FOUND</h3>
    <p>Oops. This URL doesn't go anywhere. Oh well, there are worse things in life.</p>
  </Layout>
)

export default NotFoundPage
