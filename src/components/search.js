import React, {useState, useRef} from "react"
import {useLocalStorage} from '../hooks/useLocalStorage'
import {useLocation} from '@reach/router'

const Search = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');
  const inputEl = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    setSearchTerm(inputEl.current.value)
    inputEl.current.value=''
  }

  function onChange(e) {
    setSearchTerm(inputEl.current.value)
  }

  return (
    <div>
      <form 
        style={{
          margin: '0',
          padding: '0'
        }} 
        onSubmit={e => handleSubmit(e)}>
      <input
        style={{
          width: '10vw',
          margin: '0',
          padding: '0'
        }} 
        ref={inputEl}
        type="text"
        placeholder="SEARCH"
        onChange={e => onChange(e)}
        />
      </form>

      {/* ---------------- SEARCH TERMS ---------------- */}
      {searchTerm.length > 0 && 
      <div 
        style={{
          padding: '1vh 0'
        }}>
        <div>
          Results for <strong>{searchTerm}</strong> {location.pathname !== '/work' ? `within ${location.pathname.slice(1)}`: null}
        </div>
      </div>
      }
    </div>
   )
}

export default Search