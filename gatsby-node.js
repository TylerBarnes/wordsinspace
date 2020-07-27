const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  
  // ------------
  // ------------ Create Pages and Posts views
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
        component: path.resolve(`./src/templates/${nodeType}.js`),
        path: uri,
        context: {
          id,
        },
      })
    })
  )

  // ------------
  // ------------ Create Category views
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
        component: path.resolve(`./src/templates/Category.js`),
        path: node.slug,
        context: {
          slug: node.slug,
        },
      })
    })
  )

  // // render items of a specific Category in Browser
  // result.data.categories.nodes.forEach((node) => {
  //   createPage({
  //     path: node.slug,
  //     component: path.resolve(`./src/templates/category.js`),
  //     context: {
  //       slug: node.slug,
  //     },
  //   })
  // })
}