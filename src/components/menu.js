import React from "react"
import { Link } from "gatsby"
import {useSiteMenuData} from "./hooks/useSiteMenuData"

function Menu({location}) {
  const menuData = useSiteMenuData();

  return (
     <main style={{
     	borderBottom: '1px solid #eee',
			fontSize: '0.9rem',
			textAlign: 'center',
			margin: '2vh 0',
			padding: '0.5vh 0'
     }}>
      {menuData[0] && menuData[0].menuItems.nodes.map( node => (
        <Link key={node.label} to={node.url} style={{marginRight: '2vw'}} state={{ fromMain: true}} >{node.label}</Link>
      ))}
      <Link style={{marginRight: '2vw'}} state={{ fromMain: true}}  to='/publications'>Publications</Link>
      <Link style={{marginRight: '2vw'}} state={{ fromMain: true}}  to='/presentations'>Presentations</Link>
      <Link style={{marginRight: '2vw'}} state={{ fromMain: true}}  to='/projects'>Projects</Link>
      <Link style={{marginRight: '2vw'}} state={{ fromMain: true}}  to='/teaching'>Teaching</Link>
      <Link style={{marginRight: '2vw'}} state={{ fromMain: true}}  to='/blog'>Blog</Link>
      <Link style={{marginRight: '2vw'}} state={{ fromMain: true}}  to='/about'>About</Link>
     </main>
   )
}

export default Menu