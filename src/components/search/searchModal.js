import React from 'react';
import ReactDOM from 'react-dom';

import SearchResults from "./searchResults"
import SearchModalText from "./searchModalText"

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
        backgroundColor: '#fff',
        opacity: '0.4',
      }}
      />
      <div 
        onClick={hide}
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
            background: '#513bfd',
            position: 'relative',
            margin: '59px 0 0 59px',
            borderRadius: '5px',
            width: '78.5vw',
            maxHeight: '75vh',
            padding: '0.5vh 1vw',
            overflowY: 'scroll',
          }}>

          {/* ---------------- LOADING MESSAGE ---------------- */}
          {loading && (
            <div 
              className='metadata'
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
              <SearchModalText resultsCount={searchResults.length} searchTerm={searchTerm} catName={catName} hide={hide} />
              <SearchResults items={searchResults} />
            </>
          )}
        </div>
      </div>
  </React.Fragment>, document.body
) : null;

export default SearchModal;