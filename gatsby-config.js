module.exports = {
  siteMetadata: {
    title: `Words in space - prototype`,
    description: `A gatsby-source-wordpress-experimental case study.`,
    author: `kallirroi`,
  },
  plugins: [
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from WordPress.
     */
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `https://testingvi.wordsinspace.net/graphql`, //  https://wordsinspace.net/shannon/graphql 
        schema: {
          perPage: 50,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  10
                : // And all posts in production
                  null,
          },
          Page: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  10
                : // And all posts in production
                  null,
          },
          Comment: {
            limit: 0,
          },          
          MediaItem: {
            limit: 
              process.env.NODE_ENV === `development`
                  ? // Lets just pull 50 posts in development to make it easy on ourselves.
                    10
                  : // And all posts in production
                    null,
          }, 
          Tag: {
            limit: 
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // And all posts in production
                  null,
          }
        }
      },
    },
    /**
     * The following plugins aren't required for gatsby-source-wordpress,
     * but we need them so the default starter we installed above will keep working.
     **/
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
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: { },
      }
    }
  ],
}