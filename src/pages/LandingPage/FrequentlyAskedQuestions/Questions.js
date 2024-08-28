import { useState } from "react"
import './Questions.css'


const Questions = ({ question, index }) => {
  const [isClickedButton, setIsClickedButton] = useState(false)

  const handleClick = () => {
    setIsClickedButton((prev) => !prev)
  }
  return (
    <div className={`question ${isClickedButton? 'expanded': ''}`}>
      <li key={index}>
        <div onClick={handleClick}>
          <div className="question-container">
            <span>{question.question}</span>
            {!isClickedButton && <button>+</button>}
            {isClickedButton && <button>- </button>}
          </div>
        </div>
        {isClickedButton && <p>{question.answer}</p>}
      </li>
    </div>
  )
}

export default Questions
