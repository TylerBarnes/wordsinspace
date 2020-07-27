const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  
  const {
    data: {
      allWpContentNode: { nodes: contentNodes },
    },
  } = await graphql(/* GraphQL */ `
    query ALL_CONTENT_NODES {
      allWpContentNode(
        sort: { fields: date, order: DESC }
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


  // // render a Post on Viewer
  // result.data.posts.nodes.forEach((node) => {
  //   createPage({
  //     path: node.uri,
  //     component: path.resolve(`./src/templates/post.js`),
  //     context: {
  //       uri: node.uri,
  //     },
  //   })
  // }) 

  // // render a Page on Viewer
  // result.data.pages.nodes.forEach((node) => {
  //   createPage({
  //     path: node.uri,
  //     component: path.resolve(`./src/templates/page.js`),
  //     context: {
  //       uri: node.uri,
  //     },
  //   })
  // })
}