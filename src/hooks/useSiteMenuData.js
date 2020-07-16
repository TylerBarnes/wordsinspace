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
                  title
                  label
                }
              }
            }
          }
        }
      `
    )
    return allWpMenu.nodes
}