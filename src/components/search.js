import React, {useState} from "react"

const Search = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
  	e.preventDefault(); 
  	setSearchTerm(e.target.value)
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