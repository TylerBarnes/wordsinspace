import React from "react"

const Search = () => {

  function handleChange(e, context) {
    e.preventDefault()
    // context.updateSearch(e.target.value)
  }

  function handleFocus(e, context) {
    e.preventDefault()
    // context.isSearchInfoVisible(true)
  } 

  function handleBlur(e, context) {
    e.preventDefault()
    // context.isSearchInfoVisible(false)
  } 

  return (
    <input
      style={{
        width: '10vw'
      }}
      type="text"
      placeholder="SEARCH 🔍"
      onFocus={e=>handleFocus(e)}
      onBlur={e=>handleBlur(e)}
      onChange={e=>handleChange(e)}
    />
   )
}

export default Search