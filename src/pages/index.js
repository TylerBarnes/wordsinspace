import React from "react"
import {Link} from "gatsby" 

import SEO from "../components/seo"
import Home from "../components/layouts/home"

import {useSiteMenuData} from "../components/hooks/useSiteMenuData"

export default function HomePage() {
  const menuData = useSiteMenuData();
  
  return (
    <Home>
      <SEO title="home" />
      <div style={{
        textAlign: 'left',
        display: 'flex row',
       }}>
        {menuData[0] && menuData[0].menuItems.nodes.map( (node, index) => (
          <Link key={index} to={node.url}>
            <div style={{
              fontSize: '7rem',
              lineHeight: '1.15', 
              fontWeight: '300'
            }}>
              {node.label}
            </div>
          </Link>
        ))}
        </div>
    </Home >
  )
}