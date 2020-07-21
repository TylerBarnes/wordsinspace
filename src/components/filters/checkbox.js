import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div 
    style={{
      margin: '5px 0',
      padding: '2px',
      background: '#ccc',
      borderRadius: '5px',
      color: '#000',
      filter: 'grayscale(1)'
    }}>
    <label>
      <input
        style={{
          height: '10px',
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