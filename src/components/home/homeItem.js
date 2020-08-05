import React from "react"
import {Link} from "gatsby" 

import HomeImage from "./homeImage"
import HomeCategory from "./homeCategory"

const HomeItem = ({item, index}) => {
  const connectedNode = item?.connectedNode
  const thumbnail = connectedNode?.node.featuredImage?.node?.localFile?.childImageSharp?.fluid
  const title = connectedNode?.node.title
  const category = connectedNode?.node.categories?.nodes[0]?.name
  const isEven = index%2 === 0

  return (
    <div 
      style={{
        alignSelf: 'stretch',
        display: 'flex',
        flexFlow: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        borderTop: '1px dotted #513bfd',
        margin: '1vh 1vw'
      }}> 

      <div 
        style={{
          display: 'flex',
          flexFlow: 'row',
          flexWrap: 'wrap',
        }}>
        {/*================ Latest ================*/}
        {connectedNode && <div className='latest'>LATEST</div>}

        {/*================ Category ================*/}
        {connectedNode && <HomeCategory category={category}/>}
      </div>

      {/*================ Title ================*/}
      <div className={isEven ? 'home-title left' : 'home-title right'}>
        <Link to={item.url}>{item.label}</Link>
      </div>

      {/*================ Thumbnail ================*/}
      {connectedNode && <HomeImage title={title} thumbnail={thumbnail} />}

    </div>
  )
}

export default HomeItem