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
  const leftAligned = (index%3 !== 0) && (index%2 === 0)

  return (
    <div className={isThree ? 'right' : 'left' }
      style={{
        borderTop: '1px dashed #513bfd',
        margin: '0',
        paddingBottom: '2vh',
      }}>

      <div className={leftAligned ? 'imageL' : ''}>

        {/*================ Latest, Category labels and Title ================*/}

        <div className={'home-entry'}>

          <div
            style={{
              display: 'flex',
              flexFlow: 'row wrap',
              margin: '1.2vh 0 0 10px',
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
    </div>
  )
}

export default HomeItem
