import React from "react"

const Search = ({onSearch}) => {

  const handleChange = (e) => {
  	e.preventDefault(); 
  	onSearch(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="SEARCH"
        onChange={handleChange}
      />
    </div>
   )
}

export default Search