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
      tags: allWpTag {
        nodes {
          slug
        }
      }
    }
  `).then(result => {

    if (!result.data) return null

    // create a view for Posts query
    result.data.posts.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: node.slug,
        },
      })
    }) 

    // create a view for Pages query
    result.data.pages.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          slug: node.slug,
        },
      })
    })

    // create a view for Tags
    result.data.tags.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/tag.js`),
        context: {
          slug: node.slug,
        },
      })
    })   

    // create a view for Categories
    result.data.categories.nodes.forEach((node) => {
      createPage({
        path: node.slug === 'Presentation' ? 'presentations' : node.slug,
        component: path.resolve(`./src/templates/category.js`),
        context: {
          slug: node.slug,
        },
      })
    })

  })
  .catch(err=> console.log(err))
}