import React from "react"
import { Link } from "gatsby"
import {useSiteMenuData} from "./hooks/useSiteMenuData"

function Menu() {
  const menuData = useSiteMenuData();
  return (
     <div>
       {menuData[0].menuItems.nodes.map( node => (
          <Link key={node.label} to={node.url} style={{marginRight: '2vw'}}>{node.label}</Link>
        ))}
     </div>
   )
}

export default Menu