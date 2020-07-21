import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "gatsby" 

import FilteredList from "./FilteredList"

const Modal = ({ isShowing, hide, searchResults, searchTerm, location, loading}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div 
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '1040',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        opacity: '0.5',
      }}
      />
      <div 
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '1050',
          width: '100%',
          height: '100%',
          overflowX: 'hidden',
          overflowY: 'auto',
          outline: '0',
        }}>
        <div 
          style={{
            zIndex: '100',
            background: '#000',
            position: 'relative',
            margin: '5vh auto',
            borderRadius: '3px',
            maxWidth: '80vw',
            maxHeight: '80vh',
            padding: '0.5vh 1vw',
            overflowY: 'scroll',
          }}>
          <button 
            style={{
              background: 'none',
              outline: 'none',
              border: 'none',
              position: 'fixed',
              right: '10%'
            }}
            data-dismiss="modal" aria-label="Close" onClick={hide}>Close &times;</button>

          {/* ---------------- SEARCH TERMS ---------------- */}
          <div 
            style={{
              padding: '2vh 0',
              textTransform: 'uppercase',
              fontSize: '2rem',
              color: '#fff',
            }}>
            Results for <strong>{searchTerm}</strong> {location.pathname !== '/work' ? `within ${location.pathname.slice(1)}`: null}
          </div>

          {/* ---------------- LOADING MESSAGE ---------------- */}
          {loading && (
            <div 
              style={{
                padding: '1vh 0'
              }}> 
              Loading...
            </div>
          )}
          
          {/* ---------------- SEARCH RESULTS ---------------- */}
          {!loading && (
            <FilteredList items={searchResults} />
          )}
        </div>
      </div>
  </React.Fragment>, document.body
) : null;

export default Modal;