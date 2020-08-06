import React from "react"
import {Link} from "gatsby" 

import HomeImage from "./homeImage"
import HomeCategory from "./homeCategory"

const HomeItem = ({item, index}) => {
  const connectedNode = item?.connectedNode
  const thumbnail = connectedNode?.node.featuredImage?.node?.localFile?.childImageSharp?.fluid
  const title = connectedNode?.node.title
  const category = connectedNode?.node.categories?.nodes[0]?.name
  const isThree = index%3 === 0

  return (
    <div className={isThree ? 'right' : 'left'}
      style={{
        borderTop: '1px dotted #513bfd',
        margin: '1vh 0vw',
        paddingBottom: '2vh',
      }}> 


      {/*================ Latest, Category labels and Title ================*/}

      <div className={'home-entry'}>

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
        <div className={'home-title'}>
          <Link to={item.url}>{item.label}</Link>
        </div>
      </div>

        {/*================ Thumbnail ================*/}
        {connectedNode && <HomeImage title={title} thumbnail={thumbnail} />}

    </div>
  )
}

export default HomeItem
