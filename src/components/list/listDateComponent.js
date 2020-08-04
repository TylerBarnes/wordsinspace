import React from "react"
import {getMonthName} from "../../utils"

const ListDateComponent = ({date, invertedTheme}) => {
  const monthIndex = parseInt(date.slice(5,7))
  const monthName = getMonthName(monthIndex)
  const year = date.slice(0,4)
  return (
    <div 
      className={invertedTheme ? 'date date-inverted' : 'date'}
      style={{
        alignSelf: 'flex-start'
      }}> 
      {monthName} {year} 
    </div>
  )
}

export default ListDateComponent