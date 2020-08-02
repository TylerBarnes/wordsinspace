const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  
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