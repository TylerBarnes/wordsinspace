import React from 'react';
import ReactDOM from 'react-dom';

import SearchResults from "./searchResults"
import ModalText from "./modalText"

const SearchModal = ({ isShowing, hide, searchResults, searchTerm, catName, loading}) => isShowing ? ReactDOM.createPortal(
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
          overflowY: 'hidden',
          outline: '0',
        }}>
        <div 
          style={{
            zIndex: '100',
            background: '#000',
            position: 'relative',
            margin: '10vh auto',
            borderRadius: '5px',
            maxWidth: '80vw',
            maxHeight: '70vh',
            padding: '0.5vh 1vw',
            overflowY: 'scroll',
          }}>

          {/* ---------------- LOADING MESSAGE ---------------- */}
          {loading && (
            <div 
              style={{
                padding: '1vh 0',
                textTransform: 'uppercase',
                color: '#fff'
              }}> 
              Searching for <strong>{searchTerm}</strong> {catName === '' ? '' : `under ${catName}`}
            </div>
          )}
          
          {/* ---------------- SEARCH RESULTS ---------------- */}
          {!loading && (
            <>
              <ModalText searchTerm={searchTerm} catName={catName} hide={hide} />
              <SearchResults items={searchResults} />
            </>
          )}
        </div>
      </div>
  </React.Fragment>, document.body
) : null;

export default SearchModal;