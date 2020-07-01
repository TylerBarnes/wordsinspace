const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
  {
    allWpPost {
      edges {
        node {
          slug
          }
        }
      }
    }
  `).then(result => {
    
    // create a page for a Post element
    result.data.allWpPost.nodes.forEach((node) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: node.slug,
        },
      })
    })    
  })
  .catch(err=> console.log(err))
}