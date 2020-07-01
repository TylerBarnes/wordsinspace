const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      pages: allWpPage {
        nodes {
          slug
        }
      }
      posts: allWpPost {
        nodes {
          slug
        }
      }
    }
  `).then(result => {

    if (!result.data) return null

    // create a page for Posts query
    result.data.posts.nodes.forEach((node) => {
      createPage({
        path: `/entries/${node.slug}`,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: node.slug,
        },
      })
    }) 

    // create a page for Pages query
    result.data.pages.nodes.forEach((node) => {
      createPage({
        path: `/entries/${node.slug}`,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          slug: node.slug,
        },
      })
    })    
  })
  .catch(err=> console.log(err))
}