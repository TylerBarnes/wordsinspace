import React, {useState} from "react"
import {Link} from "gatsby" 
import PropTypes from "prop-types"

import Title from "../components/title"
import Footer from "../components/footer"

import "../styles/layout.css"
import "../styles/global.css"
import "../styles/home.css"

const Home = ({children}) => {

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'row nowrap', 
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        background: 'rgba(255, 145, 83, 0.13)',
      }}>
      {/* ----------------------------WORDS IN SPACE---------------------------- */}
      <div
        style={{
          alignSelf: 'flex-start',
          height: '100vh',
          width: '60px',
          writingMode: 'vertical-rl',
          transform: 'rotate(0deg)',
          textAlign: 'left',
          paddingRight: '20px'
        }}
        >
        <Title />
      </div>

      {/* ----------------------------TOP---------------------------- */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: '1',
        }}
        >
        {/* ----------------------------HOME---------------------------- */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            textTransform: 'uppercase',
            height: '60px',
          }}
          >
          <div 
            className='interface'
            style={{
              marginLeft: '30px',
              marginTop: '15px',
            }}>
            HOME
          </div>
        </div>

        {/* ----------------------------MAIN---------------------------- */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          >
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home