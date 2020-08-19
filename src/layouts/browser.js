import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

import {useLocation} from '@reach/router'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {getResponsiveBrowserVars} from "../utils/dom"
import {useCategories} from "../hooks/useCategories"

import WordsInSpace from '../components/wordsInSpace'
import Search from '../components/search'

import MobileWordsInSpace from '../components/mobile/mobileWordsInSpace'

import '../styles/layout.css'
import '../styles/global.css'
import '../styles/browser.css'

const Browser = ({ children, props }) => {
  const location = useLocation();
  const catName = location.pathname.replace('/', '').replace('/', '')

  const categories = useCategories()

  const breakpoints = useBreakpoint()
  const {showSearch, mobileBrowserLayout, mobileNavBar} = getResponsiveBrowserVars(breakpoints)
  const styleWrapper =
  {
    display: 'flex',
    flexDirection: mobileNavBar ? 'column' : 'row',
    flexWrap: 'nowrap',
    alignItems: mobileNavBar ? 'center' : 'flex-start',
    justifyContent: 'space-around',
  }

  const styleTopBar =
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textTransform: 'uppercase',
    height: mobileNavBar ? '35px' : '50px',
    width: mobileNavBar ? '84vw' : 'calc(-50px + 100vw)',
    alignSelf: mobileNavBar ? 'center' : 'normal',
  }

  const childrenWrapper =
  {
    display: 'flex',
    flexDirection: mobileBrowserLayout ? 'column' : 'row',
    justifyContent: 'space-between',
    height: '100%',
    overflow: 'auto',
  }

  return (
    <div className={mobileBrowserLayout ? 'browser' : 'browser right-gradient'} style={styleWrapper} >
      {/* ----------------------------WORDS IN SPACE (LEFT)---------------------------- */}
      {!mobileNavBar && <WordsInSpace />}
      {mobileNavBar && <MobileWordsInSpace />}

      {/* ----------------------------MAIN CONTAINER---------------------------- */}
      <div
        style={{
          width: '100%',
          display: mobileNavBar ? 'flex' : 'block',
          flexFlow: 'column',
        }}>
        {/* ----------------------------TOP---------------------------- */}
        <div className={mobileBrowserLayout ? '' : 'top-bar'} style={styleTopBar} >

          <div style={{
          width: 'calc(-50px + 80vw)',
          display: 'flex',
          flexFlow: 'row nowrap',
          alignItems: 'center',
          }}>
            <div className='interface'
            style={{
              margin: mobileNavBar ? '0' : '17px 0px 13px 14px',
            }}>
              Browsing:
            </div>

            <div style={{
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
              width: 'inherit',
              overflow: 'auto',
              justifyContent: 'flex-start',
              marginBottom : '-3px',
            }}>
              <div>
                <Link to={'/work'}
                  style={{
                    position: 'relative',
                    margin: '5px'
                  }}
                  className={!mobileBrowserLayout ? catName === 'work' ? 'work category-active' : 'work' : catName.toLowerCase()}
                  >
                    {mobileBrowserLayout ? catName === 'work' ? `All` : `${catName}` : 'All'}
                </Link>
              </div>

              <div style={{
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center',
                overflow: 'auto',
                justifyContent: 'flex-end',
              }}>
                {!mobileBrowserLayout &&

                  categories.sort((a,b) => a.name < b.name).map((category,index) => (

                    <div key={index}>
                      <Link
                        to={`/${category.slug}`}
                        activeClassName='category-active'
                        partiallyActive={true}
                        className={category.slug}
                        >
                        {category.name}
                      </Link>
                    </div>
                  ))
                }
              </div>

            </div>

        </div>
          {showSearch && <Search />}
        </div>
        {/* ----------------------------MAIN ---------------------------- */}
        <div
          style={childrenWrapper}>
            {children}
        </div>
      </div>
    </div>
  )
}

Browser.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Browser
