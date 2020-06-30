const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allPosts: allWpPost {
        nodes {
          slug
        }
      }

      allPages: allWpPage {
        nodes {
          slug
        }
      }

      allTags: allWpTag {
        nodes {
          slug
        }
      }

      allCategories: allWpCategory {
        nodes {
          name
        }
      }
    }
  `).then(result => {
    
    // create a page for allPosts query
    result.data.allPosts.nodes.forEach((node) => {
      createPage({
        path: `/allPosts/${node.slug}`,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: node.slug,
        },
      })
    })    

    // create a page for allPages query
    result.data.allPages.nodes.forEach((node) => {
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