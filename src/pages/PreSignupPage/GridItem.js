import React from "react"

const GridItem = ({ option, handleChange, id, checked }) => {
  const IconComponent = option.Icon

  return (
    <div className="pre-signup-grid-item">
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={checked}
        onChange={() => handleChange(option.title)}
      />
      <div className="pre-signup-grid-text-content">
        <label htmlFor={id}>{option.title}</label>
        <p>{option.description}</p>
      </div>
      {IconComponent && <IconComponent />}
    </div>
  )
}

export default GridItem
