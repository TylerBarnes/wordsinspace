import React from "react"
import { myContext } from '../context/provider';

const Search = () => {

  const handleChange = (e, context) => {
    e.preventDefault()
    context.updateSearch(e.target.value)
  }

  return (
    <myContext.Consumer>
      {context => (
        <React.Fragment>
          <input
            type="text"
            placeholder="SEARCH"
            onChange={e=>handleChange(e,context)}
          />
        </React.Fragment>
      )}
    </myContext.Consumer>
   )
}

export default Search