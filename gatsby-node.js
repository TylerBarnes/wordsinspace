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
      categories: allWpCategory {
        nodes {
          slug
        }
      }
    }
  `).then(result => {

    if (!result.data) return null

    // render a Post on Viewer
    result.data.posts.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/post-template.js`),
        context: {
          slug: node.slug,
        },
      })
    }) 

    // render a Page on Viewer
    result.data.pages.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/page-template.js`),
        context: {
          slug: node.slug,
        },
      })
    })

    // render items of a specific Category on Collection
    result.data.categories.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/category-collection-template.js`),
        context: {
          slug: node.slug,
        },
      })
    })

  })
  .catch(err=> console.log(err))
}