const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      teaching: 
        allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Teaching"}}}}}) {
          totalCount
          edges {
            node {
              slug
              date
              title
              link
              categories {
                nodes {
                  name
                }
              }
              content
              excerpt
            }
          }
        }
    }
  `).then(result => {
    
    // create a page for teaching query
    result.data.teaching.nodes.forEach((node) => {
      createPage({
        path: `/teaching/${node.slug}`,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: node.slug,
        },
      })
    })    
  })
  .catch(err=> console.log(err))
}