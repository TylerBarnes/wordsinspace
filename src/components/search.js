import React from "react"
import { searchContext } from '../context/provider';

const Search = () => {

  const handleChange = (e, context) => {
    e.preventDefault()
    context.updateSearch(e.target.value)
  }

  return (
    <searchContext.Consumer>
      {context => (
        <React.Fragment>
          <input
            type="text"
            placeholder="SEARCH"
            onChange={e=>handleChange(e,context)}
          />
        </React.Fragment>
      )}
    </searchContext.Consumer>
   )
}

export default Search