import React, {useState, useMemo} from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby" 

import {useLocation} from '@reach/router'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// The GraphQL query containing the search term, will be sent to Apollo
const SEARCH_POSTS_QUERY = gql`
  query MySearchQuery($searchTerm: String!) {
    pageTitle:allWpPage(filter: {title:{regex: $searchTerm}}) {
      nodes {
        slug
         id
        ... on WpPage {
          title
        }
      }
    }
    pageContent:allWpPage(filter: {content:{regex: $searchTerm}}) {
      nodes {
        slug
         id
        ... on WpPage {
          title
        }
      }
    }
    postTitle: allWpPost(filter: {title:{regex: $searchTerm}}) {
      nodes {
        slug
         id
        ... on WpPost {
          title
        }
      }
    }
    postContent: allWpPost(filter: {content:{regex: $searchTerm}}) {
      nodes {
        slug
         id
        ... on WpPost {
          title
        }
      }
    }
  }
`

const List = ({searchTerm, searchInfoVisible, items}) => {
  
  const location = useLocation();
  const [isClicked, setIsClicked] = useState(false);
  const [details, setDetails] = useState('')

  const {loading, error, data} = useQuery(SEARCH_POSTS_QUERY, {
    variables: { searchTerm: searchTerm },
  })

  console.log(loading, error, data)

  const searchResults = data

  const handleClick = (e, index) => {
    e.preventDefault();
    setIsClicked(true);
    setDetails(`
      <div>${searchResults[index].content}</div>
    `)
  }  

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'row wrap', 
        alignItems: 'flex-start',
        justifyContent: 'stretch',
        height: '90vh',
      }}>
        {/* ---------------- LEFT SIDE LIST ---------------- */}
        <div 
          style={{
            flexGrow: '2',
            height: '90vh',
            overflow: 'scroll',
            padding: '10px'
          }}>

          {searchInfoVisible && searchTerm.length > 0 && 
          <div 
            style={{
              padding: '1vh 0'
            }}>
            Results for <strong>{searchTerm}</strong> {location.pathname !== '/work' ? `within ${location.pathname.slice(1)}`: null}
          </div>
          }

          {loading && (<div>loading...</div>)}
          {!loading && searchResults.map((node, index) => (
            <li 
              key={index}
              style={{
                listStyle: 'none',
                padding: '5px',
              }}>

              <Link 
                to={`../${node.slug}`}> 
                <h1>{node.title}</h1>
              </Link>              
              <span  onClick={e=>handleClick(e,index)} > PREVIEW </span>
              
              <div 
                style={{
                  margin: '0 0.2vw', 
                  fontSize: '0.8rem', 
                  fontStyle: 'italic', 
                  display: 'none'
                }}> 
                {node.nodeType}
              </div>

              <div 
                style={{
                  margin: '0 0.2vw', 
                  fontSize: '0.8rem',
                  color: '#aaa',
                }}> 
                {node.date && node.date.slice(0,4)} 
              </div>
              
              <div
                style={{
                margin: '0 0.2vw',
                fontSize: '0.8rem'
                }}> 
                {node.tags && node.tags.nodes.map((tag, index_tag) => 
                  <span key={index_tag}>
                    {index_tag < node.tags.nodes.length-1 ? `${tag.slug}, `.replace(/-|_/, ' ') : `${tag.slug}`.replace(/-|_/, ' ')}
                  </span>
                )}
              </div>
            </li>
          ))}
        </div>

        {/* ---------------- RIGHT SIDE PREVIEW ---------------- */}
        <div 
          style={{
            width: isClicked ? '40vw' : '0',
            height: '90vh',
            overflow: 'hidden',
            padding: '10px 20px'
          }}>
          {isClicked && <div dangerouslySetInnerHTML={{ __html: details }} />}
        </div>
    </div>
   )
}


List.propTypes = {
  items: PropTypes.array,
}

List.defaultProps = {
  items: [],
}

export default List