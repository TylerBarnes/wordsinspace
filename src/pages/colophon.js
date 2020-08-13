import React from "react"

import Home from "../layouts/home"
import SEO from "../components/seo"

import useBreakpoints from '../hooks/useBreakpoint'
import {getResponsiveHomeVars} from "../utils/dom"

import ArticleTitle from "../components/article/articleTitle"
import ArticleFooter from "../components/article/articleFooter"

export default function Colophon() {
  const breakpoint = useBreakpoints()
  const {mobileColophon, mobileColophonWidth} = getResponsiveHomeVars(breakpoint)
  const columnStyle = 
  {
    width: mobileColophon ? '100%' : '33%',
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
          Words in Space Colophon,
          <br/> 
          2020 
          </div>

        <div
          style={{
            display: 'flex',
            flexDirection: mobileColophon ? 'column' : 'row',
            justifyContent: 'flexstart',
            alignItems: 'flexstart',
            width: mobileColophon ? mobileColophonWidth : '100%',
            margin: mobileColophon ? '15px auto' : '0',
            padding: '0',
          }}>
            <div
              style={columnStyle}
              className='colophon-copy'>
              <p> Words in Space was redesigned and redeveloped in the summer of 2020 by FOREIGN OBJECTS, Brooklyn, New York. This is Shannon Mattern’s third [?] instance of her website. FOREIGN OBJECTS is a design and research studio established by four itinerant foreigners (Agnes Cameron, Sam Ghantous, Kalli Retzepi, and Gary Zhexi Zhang) that explore the internet through the production of cultural artifacts. We build environments, tools, and discourses to imagine new ways of living with the web.</p>

              <p>Typesetting This website has been typeset using two primary typefaces: </p>
              <p>La Nord, designed by Raoul Gottschling Düsseldorf / Hossegor, 2016</p>

              <p>[ INCLUDE SAMPLE]</p>

              <p>“Metafont is a description language used to define raster fonts. It is also the name of the interpreter that executes Metafont code, generating the bitmap fonts that can be embedded into e.g. PostScript. Metafont was devised by Donald Knuth as a companion to his TeX typesetting system.”</p> 

              <p>In order to use Metafont, we used Metaflop “an easy to use web application for modulating your own fonts.” </p>

              <ul>
                <li>Bespoke-CuWIRCo2h2</li>
                <li>Bespoke-JqcDoWNXFu</li>
                <li>Bespoke-tu_SfFPykv</li>
              </ul>

              <p>[INCLUDE SAMPLES]</p>

              <p>*Note: Using these autogenerated names means you can backwards reveal the parameters of fonts in Metaflop by plugging it into the URL.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue ut lectus arcu. Eros in cursus turpis massa tincidunt dui. Tempus urna et pharetra pharetra. Eu facilisis sed odio morbi quis commodo odio aenean. Urna condimentum mattis pellentesque id nibh tortor. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Nam at lectus urna duis convallis convallis tellus id interdum. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Mi sit amet mauris commodo quis imperdiet massa. Vel eros donec ac odio tempor orci dapibus. At augue eget arcu dictum varius duis. Sed turpis tincidunt id aliquet risus.</p>
            </div>

            <div
              style={columnStyle}
              className='colophon-copy'>
              <p> Words in Space was redesigned and redeveloped in the summer of 2020 by FOREIGN OBJECTS, Brooklyn, New York. This is Shannon Mattern’s third [?] instance of her website. FOREIGN OBJECTS is a design and research studio established by four itinerant foreigners (Agnes Cameron, Sam Ghantous, Kalli Retzepi, and Gary Zhexi Zhang) that explore the internet through the production of cultural artifacts. We build environments, tools, and discourses to imagine new ways of living with the web.</p>

              <p>Typesetting This website has been typeset using two primary typefaces: </p>
              <p>La Nord, designed by Raoul Gottschling Düsseldorf / Hossegor, 2016</p>

              <p>[ INCLUDE SAMPLE]</p>

              <p>“Metafont is a description language used to define raster fonts. It is also the name of the interpreter that executes Metafont code, generating the bitmap fonts that can be embedded into e.g. PostScript. Metafont was devised by Donald Knuth as a companion to his TeX typesetting system.”</p> 

              <p>In order to use Metafont, we used Metaflop “an easy to use web application for modulating your own fonts.” </p>

              <ul>
                <li>Bespoke-CuWIRCo2h2</li>
                <li>Bespoke-JqcDoWNXFu</li>
                <li>Bespoke-tu_SfFPykv</li>
              </ul>

              <p>[INCLUDE SAMPLES]</p>

              <p>*Note: Using these autogenerated names means you can backwards reveal the parameters of fonts in Metaflop by plugging it into the URL.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue ut lectus arcu. Eros in cursus turpis massa tincidunt dui. Tempus urna et pharetra pharetra. Eu facilisis sed odio morbi quis commodo odio aenean. Urna condimentum mattis pellentesque id nibh tortor. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Nam at lectus urna duis convallis convallis tellus id interdum. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Mi sit amet mauris commodo quis imperdiet massa. Vel eros donec ac odio tempor orci dapibus. At augue eget arcu dictum varius duis. Sed turpis tincidunt id aliquet risus.</p>
            </div>

        </div>
        <ArticleFooter />
      </Home>
  )
}
