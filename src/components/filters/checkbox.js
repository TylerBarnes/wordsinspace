import React from "react";

const Checkbox = ({ count, label, isSelected, onCheckboxChange }) => {
  if (count < 2 ) return null
  return (
    <div 
      style={{
        margin: '5px 0',
      }}>
      {isSelected ? <span className='tag-clear'> &times; </span> : null}
      <label 
        style={{
          // padding: '2px 15px 2px 25px',
          paddingLeft: '20px',
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