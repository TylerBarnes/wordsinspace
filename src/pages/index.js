import React from "react"
import {Link} from "gatsby" 

import SEO from "../components/seo"
import Home from "../layouts/home"

export default function HomePage() {
  
  return (
    <Home>
      <SEO title="home" />
      <div 
        style={{
        textAlign: 'left',
        display: 'flex row',
       }}>

      <Link to={'/blog/'}>
        <div style={{
          fontSize: '7rem',
          lineHeight: '1.15', 
          fontWeight: '300'
        }}>
          Blog
        </div>
      </Link>         

      <Link to={'/teaching/'}>
        <div style={{
          fontSize: '7rem',
          lineHeight: '1.15', 
          fontWeight: '300'
        }}>
          Teaching
        </div>
      </Link>        

      <Link to={'/publications/'}>
        <div style={{
          fontSize: '7rem',
          lineHeight: '1.15', 
          fontWeight: '300'
        }}>
          Publications
        </div>
      </Link>          

      <Link to={'/projects/'}>
        <div style={{
          fontSize: '7rem',
          lineHeight: '1.15', 
          fontWeight: '300'
        }}>
          Projects
        </div>
      </Link>      

      <Link to={'/about/'}>
        <div style={{
          fontSize: '7rem',
          lineHeight: '1.15', 
          fontWeight: '300'
        }}>
          About
        </div>
      </Link>

      </div>
    </Home >
  )
}