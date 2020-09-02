const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions


  const { createRedirect } = actions
  createRedirect({ fromPath: '/shannon/:slug', toPath: '/:slug', force: true, statusCode: 200 })
  createRedirect({ fromPath: '/presentations/:slug', toPath: '/:slug', force: true, statusCode: 200 })
  createRedirect({ fromPath: '/publications/:slug', toPath: '/:slug', force: true, statusCode: 200 })
  createRedirect({ fromPath: '/projects/:slug', toPath: '/:slug', force: true, statusCode: 200 })
  // createRedirect({ fromPath: '/work/:slug', toPath: '/:slug', force: true, statusCode: 200 })
  createRedirect({ fromPath: '/teaching/:slug', toPath: '/classes/:slug', force: true, statusCode: 200 })
  createRedirect({ fromPath: '/teaching/', toPath: '/classes/', force: true, statusCode: 200 })
  createRedirect({ fromPath: '/*.pdf', toPath: 'https://icd.wordsinspace.net/:splat', force: true, statusCode: 301 })
  // ------------
  // ------------ Create Pages and Posts endpoints
  // ------------
  const {
    data: {
      allWpContentNode: { nodes: contentNodes },
    },
  } = await graphql(`
    query ALL_CONTENT_NODES {
      allWpContentNode(
        sort: { fields: date, order: DESC }
        filter: { nodeType: { ne: "MediaItem" } }
      ) {
        nodes {
          nodeType
          uri
          id
          slug
        }
      }
    }
  `)

  await Promise.all(
    contentNodes.map(async (node, i) => {
      const { nodeType, uri, id } = node

      await actions.createPage({
        component: path.resolve(`./src/templates/${nodeType.toLowerCase()}.js`),
        path: uri,
        context: {
          id,
        },
      })
    })
  )

  // ------------
  // ------------ Create Category endpoints
  // ------------
  const {
    data: { allWpCategory },
  } = await graphql(`
    {
      allWpCategory {
        nodes {
          slug
        }
      }
    }
  `)

  await Promise.all(
    allWpCategory.nodes.map(async (node, index) => {
      await actions.createPage({
        component: path.resolve(`./src/templates/category.js`),
        path: node.slug,
        context: {
          slug: node.slug,
        },
      })
    })
  )


  // ------------
  // ------------ Create 'work' endpoint
  // ------------
  await actions.createPage({
    component: path.resolve(`./src/templates/work.js`),
    path: '/work',
  })
}
