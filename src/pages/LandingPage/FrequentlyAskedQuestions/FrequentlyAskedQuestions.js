import Questions from "./Questions"

import { questions } from "../../../constants/questions"
import "./FrequentlyAskedQuestions.css"
const FrequentlyAskedQuestions = () => {
  return (
    <div className="frequently-asked-questions-container">
      <div className="frequently-asked-questions">
        <h2>Frequently asked questions</h2>
        <div class="questions-container">
          <ul>
            {questions.map((question, index) => (
              <Questions question={question} index={index} />
            ))}
          </ul>
        </div>
      </div>
      <div className="text-content" id="faq">
        <section>
          <h3>Start your free 3-day trial today!</h3>
          <div className="cta-form">
            <input placeholder="Enter your email address"></input>
            <button>Get Started</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FrequentlyAskedQuestions
