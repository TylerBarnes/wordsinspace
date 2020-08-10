import React from "react";

const Checkbox = ({ count, label, isSelected, onCheckboxChange, clearIndividualTag}) => {
  if (count < 2 ) return null // hiding the tags with only one item
  return (
    <div 
      style={{
        margin: '5px 0',
      }}>
      {isSelected 
        ? <div 
            onClick={clearIndividualTag}
            className='tag-clear'>  
            &times;
          </div> 
        : null
      }
      <label 
        style={{
          paddingLeft: '20px',
          margin: 0,
          textAlign: 'left',
        }} 
        className={isSelected ? 'tag tag-active' : 'tag'}
        >
        <input
          style={{
            height: '0px',
          }}
          type="checkbox"
          name={label}
          checked={isSelected}
          onChange={onCheckboxChange}
        />
        {label} [{count}]
      </label>
      
    </div>
  )
};

export default Checkbox;