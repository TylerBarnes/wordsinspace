import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div 
    style={{
      margin: '5px 0',
    }}>
    {isSelected ? <span className='tag-clear'> &times; </span> : null}
    <label 
      style={{padding: '2px 15px 2px 25px'}} 
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
      {label}
    </label>
  </div>
);

export default Checkbox;