import React, {useState, useEffect} from "react"
import {useCategories} from "../../hooks/useCategories"

const Search = () => {
	const categories = useCategories()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const results = categories.filter(category => {
      return category.name.toLowerCase().startsWith(searchTerm)
    })
    setSearchResults(results)
  }, [searchTerm])
  
  const handleChange = (e) => {
  	e.preventDefault(); 
  	e.stopPropagation(); 
  	setSearchTerm(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="SEARCH"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
   )
}

export default Search