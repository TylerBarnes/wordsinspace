import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ description, lang, meta, author, title }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content="https://wordsinspace.net/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://raw.githubusercontent.com/samtous/wordsinspace/master/src/images/twittercard.png" />
      <meta name="google-site-verification" content="qgz1o-wWQZm7p2-_tkORHgZtQo1b29E0RSOVNrkJREM" />
      <html lang="en" />
    </Helmet>
  )
}


SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: `Words in Space is the work of Shannon Mattern.`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
