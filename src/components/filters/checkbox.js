import React from "react";

const Checkbox = ({ count, label, isSelected, onCheckboxChange}) => {
  if (count < 1 ) return null // hiding the tags with no items (shouldn't be necessary)
  return (
    <div
      style={{
        margin: '5px 0',
      }}>

      <label
        style={{
          margin: 0,
          textAlign: 'left',
          // wordWrap: 'break-word'
        }}
        className={isSelected ? 'tag tag-active' : 'tag'}
        >
        <input
          style={{
            height: '0px',
          }}
          type="checkbox"
          name={label.replace(/\s/, '\n')}
          checked={isSelected}
          onChange={onCheckboxChange}
        />
        {label}
      </label>

    </div>
  )
};

export default Checkbox;
