const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPost {
        nodes {
          excerpt
          slug
          link
          title
          content
        }
      }
    }
  `).then(result => {
    result.data.allWpPost.nodes.forEach((node) => {
      createPage({
        path: `/allPosts/${node.slug}`,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  })
  .catch(err=> console.log(err))
}