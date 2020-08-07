module.exports = {
  siteMetadata: {
    title: `Words in Space`,
    description: `Words in Space is the work of Shannon Mattern.`,
    author: `Work: Shannon Mattern. Design: FOREIGN OBJECTS`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.NODE_ENV === `development`
            ? `http://localhost:8888/shannon8/graphql`
            : `https://importii.wordsinspace.net/graphql`,
        schema: {
          perPage: 50,
        },
        verboseOutput: true,
        html: {
          useGatsbyImage: true,
          imageQuality: 80,
          imageMaxWidth: 1400,
        },
        develop: {
          nodeUpdateInterval: 10000,
          hardCacheMediaFiles: true,
        },
        production: {
          hardCacheMediaFiles: false,
        },
        debug: {
          graphql: {
            showQueryOnError: false,
            showQueryVarsOnError: true,
            copyQueryOnError: true,
            panicOnError: true,
            // a critical error is a WPGraphQL query that returns an error and no response data. Currently WPGQL will error if we try to access private posts so if this is false it returns a lot of irrelevant errors.
            onlyReportCriticalErrors: false,
          },
        },
        type: {        
          Comment: {
            limit: 0
          },
          Tag: {
            limit: process.env.NODE_ENV === `development`
                   ? null
                   : null
          },
          Post: {
            limit: process.env.NODE_ENV === `development`
                   ? null
                   : null
          },          
          Page: {
            limit: process.env.NODE_ENV === `development`
                   ? null
                   : null
          },          
          MediaItem: {
            limit: process.env.NODE_ENV === `development`
                   ? null
                   : null
          },
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
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    `gatsby-transformer-sharp`,
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
