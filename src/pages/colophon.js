import React from "react"

import Home from "../layouts/home"
import SEO from "../components/seo"

import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import {getResponsiveHomeVars} from "../utils/dom"

import ArticleFooter from "../components/article/articleFooter"

export default function Colophon() {
  const breakpoints = useBreakpoint();
  const {mobileColophon, mobileColophonWidth} = getResponsiveHomeVars(breakpoints)

  const columnStyle =
  {
    width: mobileColophon ? '100%' : '60%',
    paddingRight: '2vw'
  }

  return (
      <Home>
        <SEO title="Colophon" />

        {/* ==================== Title ====================  */}
        <div
          className='reader-title'
          style={{
            textAlign: 'center',
            height: 'auto',
            margin: '30px 0',
            padding: '0',
          }}>

        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: mobileColophon ? 'column' : 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: mobileColophon ? mobileColophonWidth : '100%',
            margin: mobileColophon ? '15px auto' : '0',
            padding: '0',
          }}>
            <div
              style={columnStyle}
              className='colophon-copy'>

              <p>Words in Space was redeveloped in the summer of 2020 by <a href='http://www.foreignobjects.net'>Foreign Objects</a>. It is the seventh redesign of Shannon Mattern website, which has been online since 2002.</p>

              <p>The website is uses a <a href="https://en.wikipedia.org/wiki/WordPress">Wordpress</a> content management system and a MySQL database, queried by <a href='https://graphql.org/'>GraphQL</a> using a frontend built with <a href='https://www.gatsbyjs.com/'>GatsbyJS</a>.</p>

              <p>Words in Space uses two typefaces: </p>

              <p style={{
                fontFamily: 'LaNord_SemiLight',
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '23px',
                margin: '1.45rem 2rem',
              }}>
              La Nord, by <a href='http://raoulgottschling.de/'>Raoul Gottschling</a>.
              </p>
              <p style={{
                fontFamily: 'Bespoke',
                fontWeight: '500',
                fontSize: '15px',
                lineHeight: '26px',
                margin: '1.45rem 2rem',
              }}>
              <a href='https://www.metaflop.com/metafonts/bespoke'>Bespoke</a>, a metafont developed using <a href="https://www.metaflop.com/">Metaflop</a>, developed by Alexis Reigel and Marco Muller. <a href="https://en.wikipedia.org/wiki/Metafont">Metafont</a> is a computer language used to define raster fonts devised by Donald Knuth as a companion to his TeX typesetting system.
              </p>

              <p><a href="https://www.foreignobjects.net">Foreign Objects</a> is an itinerant design and research studio exploring the internet through the production of cultural artifacts. Its members are based in New York, London and Toronto.</p>


            </div>
          </div>
        <ArticleFooter />

      </Home>
  )
}
