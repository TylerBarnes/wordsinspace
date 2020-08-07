import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"

import {useTags} from "../hooks/useTags"
import {useTagSelection} from "../hooks/useTagSelection"
import useBreakpoints from '../hooks/useBreakpoint'

import {extractTags} from "../utils"
import {sortByDate} from "../utils"
import {getResponsiveVars} from "../utils"

import Browser from "../layouts/browser"
import SEO from "../components/seo"
import Filters from "../components/filters"
import List from "../components/list"

export default function CategoryTemplate({data}) {
  const breakpoint = useBreakpoints();
  const {showDesktopFilters, showMobileFilters} = getResponsiveVars(breakpoint)

  // initialize the items to all of the Pages and all of the Posts
  const initial = [...data.allWpCategory.nodes[0].pages.nodes, ...data.allWpCategory.nodes[0].posts.nodes];

  const [isTagMode, setTagMode] = useState(false)

  // initialize the tags to only those that belong to data of this category, see function definition below for more details
  // const [tags, setTags] = useState(extractTags(initial))
  const [tags, setTags] = useState(useTags())

  // handles clicking on Tags by updating the 'checked' key-value for every tag
  function handleSelection(e) {
    const { name } = e.target;
    setTags(tags.map(tag => tag.name === name ? {...tag, checked: !tag.checked } : tag))
  }

  // handles clearing the Tag selections and toggling TagMode
  function handleClear(e) {
    e.preventDefault()
    setTags(tags.map(tag=> ({...tag, checked: false})))
    setTagMode(false)
  }
  

  // watches tags array for updates and updates the Tag Mode in case no Tag is checked
  useEffect(()=> {
    setTagMode(tags.filter(tag=>tag.checked).length > 0)
  }, [tags])

  // ========== //
  // Apollo query
  // ========== //

  // Apollo useQuery (imported as a hook) fetches Posts and Pages of selected Tags array
  const response = useTagSelection(tags.filter(tag=> tag.checked), isTagMode);
  const tagQueryResults = isTagMode && !response.loading 
                          ? [...response?.data?.posts?.nodes, ...response?.data?.pages?.nodes]
                          : [] 

  return (
    <Browser>
      <SEO title={data.allWpCategory.nodes[0].name} />
      {showMobileFilters && 
        <div>mobile Filters</div>
      }
      <List items={sortByDate(isTagMode ? tagQueryResults : initial)} loading={response.loading} isTagMode={isTagMode}/>
      {showDesktopFilters && 
        <Filters tags={tags} selectTags={handleSelection} clearTags={handleClear} isTagMode={isTagMode}/>
      }
    </Browser>
  )
}

// this is a static GraphQL query Gatsby executes when compiling so that we can have access to the different /category endpoints
export const query = graphql`
  query getCategory($slug: String!) {
    allWpCategory(filter: {slug: { eq: $slug }}) {
      nodes {
        name
        slug
        posts {
          nodes {
            title
            slug
            date
            content
            excerpt
            uri
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            categories {
              nodes {
                name
              }
            }
            tags {
              nodes {
                slug
                name
                id
              }
            }
          }
        }
        pages {
          nodes {
            title
            slug
            date
            content
            uri
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            categories {
              nodes {
                name
              }
            }
            tags {
              nodes {
                slug
                name
                id
              }
            }
          }
        }
      }
    }
  }
`
