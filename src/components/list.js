import React  from "react"
import PropTypes from "prop-types"
import {useScrollRestoration} from "gatsby"
import Footer from "./footer"
import MobileFooter from "./mobile/mobileFooter"

import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {getResponsiveBrowserVars} from "../utils/dom"

import ListItem from "./list/listItem"

const List = ({loading, items, isTagMode}) => {
  const breakpoints = useBreakpoint()
  const {mobileList, listWidth, listTitleWidth} = getResponsiveBrowserVars(breakpoints)

  const ulScrollRestoration = useScrollRestoration(`list-component-ul-list`)

  function handleScrollTop() {
    if (typeof window === `undefined`) return null
    document.getElementById('list').scrollIntoView()
  }

  return (
    <div className="no-scroll"
      {...ulScrollRestoration}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: mobileList ? 'center' : 'flex-start',
        justifyContent: 'space-between',
        maxHeight: mobileList ?  'calc(100vh - 185px)' : 'calc(100vh - 60px)',
        overflow: 'auto',
      }}>
        {/* ---------------- LOADING ---------------- */}
        {loading &&
          <ul>
            <div
            style={{
              width: listWidth,
              height: 'auto',
              minHeight: '150px',
            }}
            className='interface'>
              FILTERING TAGS...
            </div>
          </ul>
        }

        {/* ---------------- LIST ---------------- */}
        {!loading &&
          <ul
            style={{
              borderBottom: mobileList ? 'none' : '1px solid #6262F4',
              padding: '0px 15px 15px 15px',
              width: mobileList ? 'auto' : 'calc(80vw - 50px)',
            }}
            id='list'>
            <button
              style={{
                display: !mobileList ? 'block' : 'none',
                position: 'fixed',
                margin: '0',
                padding: '0',
                left: '78.2vw',
                top: '10vh',
                outline: 'none',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '900',
                color: '#6262F4',
                background: 'transparent',
                textTransform: 'uppercase',
                cursor: 'pointer',
                zIndex: '2'
              }}
              onKeyPress={handleScrollTop}
              onClick={handleScrollTop}>
              <div
                className='metadata'
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                }}>
                &#x2192;
                &#x2192;
                &#x2192;
              </div>
            </button>

            {items && items.map((item, index) => (
              <ListItem
                key={index}
                item={item}
                mobileList={mobileList}
                isTagMode={isTagMode}
                invertedTheme={false}
                listWidth={listWidth}
                listTitleWidth={listTitleWidth}
                />
            ))}
          </ul>

        }
        {!mobileList && <Footer />}
        {mobileList && <MobileFooter />}
    </div>
   )
}

List.propTypes = {
  items: PropTypes.array,
}

List.defaultProps = {
  items: [],
}

export default List
