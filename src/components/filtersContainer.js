import React, {useState} from "react"
import {Link} from "gatsby" 

import {useCategories} from "../hooks/useCategories"
import {useTags} from "../hooks/useTags"

import Tags from "./filters/tags"
import Categories from "./filters/categories"

const FiltersContainer = (props) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const tags = useTags();
  const categories = useCategories();
  const nonEmptyTags = tags.filter(node => (node.pages.nodes.length > 0 || node.posts.nodes.length > 0))

  return (
    <div 
      style={{
        border: '1px solid',
        height: '100vh', 
        minWidth: isExpanded ? '15vw' : '3vw', 
        textTransform: 'uppercase',
        padding: '10px',
      }}>
      <span 
        onClick={e => setIsExpanded(!isExpanded)}
        style={{
          writingMode: isExpanded ? 'default' :'vertical-rl',
          transform: isExpanded ? 'rotate(-90deg)' : 'rotate(180deg)',
          textAlign:  isExpanded ? 'left' : 'right',
          marginLeft:  isExpanded ? '5px' : '0',
        }}>
        Index
      </span>
      <div 
        style={{
          display: isExpanded ? 'block' : 'none',
          margin: '2vh 0'
        }}>
        <Categories categories={categories} />
        <Tags tags={nonEmptyTags} />
      </div>
    </div>
   )
}

export default FiltersContainer