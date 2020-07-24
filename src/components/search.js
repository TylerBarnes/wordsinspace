import React, {useState, useRef} from "react"
import {useLocation} from '@reach/router'
import { gql, useQuery } from '@apollo/client'

import {sortByDate} from '../utils'

import SearchModal from "./search/searchModal"

// The GraphQL query containing the search term, will be sent to Apollo
const SEARCH_POSTS_QUERY = gql`
  query SearchQuery($first: Int, $searchTerm: String!) {
    posts(first: $first, where: { search: $searchTerm }) {
      nodes {
        title
        slug
        excerpt
        date
      }
    }
    pages(first: $first, where: { search: $searchTerm }) {
      nodes {
        title
        slug
        date
      }
    }
  }
`

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const inputEl = useRef(null)
  const location = useLocation();
  
  const {loading, error, data} = useQuery(SEARCH_POSTS_QUERY, {
    variables: { searchTerm: searchTerm, first: 150},
    skip: !showResults
  })

  const searchResults = showResults && !loading ? sortByDate([...data.posts.nodes, ...data.pages.nodes]) : []

  function handleSubmit(e) {
    e.preventDefault()
    setShowResults(() => (searchTerm.length > 0 ? true : false))
    inputEl.current.value=''
  }

  function onChange(e) {
    e.preventDefault();
    setSearchTerm(inputEl.current.value)
  }

  function closeModal(e) {
    e.preventDefault();
    setShowResults(false)
    setSearchTerm('')
    inputEl.current.value=''
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
      
      <SearchModal
        isShowing={showResults}
        hide={e=>closeModal(e)}
        searchTerm={searchTerm}
        location={location}
        loading={loading}
        searchResults={searchResults}
      />
    </div>
   )
}

export default Search