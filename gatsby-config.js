module.exports = {
  siteMetadata: {
    title: `Words in space - prototype`,
    description: `A gatsby-source-wordpress-experimental case study.`,
    author: `kallirroi`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.NODE_ENV === `development`
            ? `http://localhost:8888/shannon/graphql`
            : `https://testingvi.wordsinspace.net/graphql`,
        schema: {
          perPage: 50,
        },
        type: {
          Tag: {
            limit: 
              process.env.NODE_ENV === `development`
                ? 10
                : null,
          }
        }
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`, 
    {
      resolve: `gatsby-plugin-remove-serviceworker`,
      options: {
        filename: `runtime-service-worker.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        appElement: '#___gatsby',
        modalProps: { },
      }
    }
  ],
}