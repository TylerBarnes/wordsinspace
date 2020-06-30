const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPost {
        nodes {
          slug
        }
      }
      allWpPage {
        nodes {
          slug
        }
      }
      allWpTag {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    // create Posts
    result.data.allWpPost.nodes.forEach((node) => {
      createPage({
        path: `/allPosts/${node.slug}`,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: node.slug,
        },
      })
    })    

    // create Pages
    result.data.allWpPage.nodes.forEach((node) => {
      createPage({
        path: `/allPages/${node.slug}`,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          slug: node.slug,
        },
      })
    })


  })
  .catch(err=> console.log(err))
}