import React, {useState, useEffect, useRef} from "react"
import {useLocation} from '@reach/router'
import { gql, useQuery } from '@apollo/client'

import {extractSearchResults} from '../utils/helpers'
import SearchModal from "./search/searchModal"

// The GraphQL query containing the search term, will be sent to Apollo
const SEARCH_QUERY = gql`
  query SearchQuery($first: Int, $searchTerm: String!, $catName: String!) {
    categories(where: {nameLike: $catName}) {
      nodes {
        name
        posts(first: $first, where: {search: $searchTerm}) {
          nodes {
            title
            slug
            date
            excerpt
            uri
            categories {
              nodes {
                name
              }
            }
            tags {
              nodes {
                id
                slug
                name
              }
            }
          }
        }
        pages(first: $first, where: {search: $searchTerm}) {
          nodes {
            title
            slug
            date
            uri
            categories {
              nodes {
                name
              }
            }
            tags {
              nodes {
                id
                slug
                name
              }
            }
          }
        }
      }
    }
  }
`

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([])
  const inputEl = useRef(null)
  const location = useLocation();
  const catName = location.pathname.replace('/', '').replace('/', '') !== 'work' ? location.pathname.replace('/', '').replace('/', '') : ''

  const {loading, data} = useQuery(SEARCH_QUERY, {
      variables: { searchTerm: searchTerm, first: 150, catName: catName},
      skip: !showResults
    })

  useEffect((loading, showResults)=>{
    if (showResults && !loading) {
      setSearchResults(extractSearchResults(data))
    }
  },[data])

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
    <div
      style={{
        marginTop: '0',
        width: '20vw',
            }}>
      <form
        style={{
          margin: '0',
          padding: '0 1vw',
          width: '100%',
        }}
        onSubmit={e => handleSubmit(e)}>

        <div
          style={{
            display: 'flex',
            flexFlow: 'row',
            justifyContent: 'flex-end',
            width: 'inherit',
          }}>
        <input
          style={{
            cursor: 'text',
            width: '20vw',
            margin: '0',
            padding: '5px 0 0 5px',
            border: 'none',
            background: 'rgba(255,255,255,0.6)'
          }}
          ref={inputEl}
          type="text"
          placeholder="SEARCH"
          className='interface'
          onChange={e => onChange(e)}
          />

        </div>
      </form>
      <SearchModal
        isShowing={showResults}
        hide={e=>closeModal(e)}
        searchTerm={searchTerm}
        catName={catName}
        loading={loading}
        searchResults={searchResults}
      />
   </div>
   )
}

export default Search
