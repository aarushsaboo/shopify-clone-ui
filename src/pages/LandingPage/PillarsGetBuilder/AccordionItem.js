import React, { useState } from "react"
const AccordionItem = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div className="accordion-item">
        <h4 onClick={handleToggle}>{title}</h4>
      <div className={`accordion-content ${isExpanded ? "is-active" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default AccordionItem
