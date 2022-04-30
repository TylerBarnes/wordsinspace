import { useStaticQuery, graphql } from "gatsby"

export const useSiteMenuData = () => {
    const { allWpMenu } = useStaticQuery(
      graphql`
        query MenuData {
          allWpMenu {
            nodes {
              menuItems {
                nodes {
                  url
                  label
                  connectedNode {
                    node {
                      ... on WpPage {
                        id
                        title
                        categories {
                          nodes {
                            name
                          }
                        }
                        featuredImage {
                          node {
                            localFile {
                              childImageSharp {
                                gatsbyImageData(layout: CONSTRAINED)
                              }
                            }
                          }
                        }
                      }
                      ... on WpPost {
                        id
                        title
                        categories {
                          nodes {
                            name
                          }
                        }
                        featuredImage {
                          node {
                            localFile {
                              childImageSharp {
                                gatsbyImageData(layout: CONSTRAINED)
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `
    )
    return allWpMenu.nodes
}