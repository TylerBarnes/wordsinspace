import React from "react"
import { Link } from "gatsby"
import {useSiteMenuData} from "./hooks/useSiteMenuData"

function Menu() {
  const menuData = useSiteMenuData();
  return (
     <main style={{
     	borderBottom: '1px solid #eee',
			fontSize: '0.9rem',
			textAlign: 'center',
			margin: '2vh 0',
			padding: '0.5vh 0'
     }}>
       {menuData[0].menuItems.nodes.map( node => (
          <Link key={node.label} to={node.url} style={{marginRight: '2vw'}}>{node.label}</Link>
        ))}
     </main>
   )
}

export default Menu