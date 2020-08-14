import React from "react"
import {getMonthName} from "../../utils/helpers"

const ListDate = ({date, invertedTheme}) => {
  const monthIndex = parseInt(date.slice(5,7))
  const monthName = getMonthName(monthIndex)
  const year = date.slice(0,4)
  return (
    <div
      className={invertedTheme ? 'date date-inverted' : 'date'}
      style={{
        alignSelf: 'flex-start',
        margin: '1px 5px 0px 0px',
      }}>
      {monthName} {year}
    </div>
  )
}

export default ListDate
