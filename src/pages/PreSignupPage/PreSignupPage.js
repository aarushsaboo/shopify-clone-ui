import React, { useState } from "react"
import "./PreSignupPage.css"
import { preSignupOptions } from "../../constants/preSignupOptions"
import GridItem from "./GridItem"
import { useNavigate } from "react-router-dom"

const StepZero = ({ formData, handleChange }) => {
  return (
    <div className="step">
      <svg></svg>
      <progress value="0" max="3"></progress>
      <h2>Let’s get started. Which of these best describes you?</h2>
      <p>We’ll help you get set up based on your business needs.</p>
      <form>
        <div className="pre-signup-grid">
          <div className="pre-signup-grid-item">
            <input
              type="radio"
              id="I'm-just-starting"
              name="start-status"
              checked={formData["step0"]["I'm just starting"]}
              onChange={() => handleChange("I'm just starting", "step0")}
            ></input>
            <label htmlFor="I'm-just-starting">I'm just starting</label>
          </div>
          <div className="pre-signup-grid-item">
            <input
              type="radio"
              id="I'm-already-selling"
              name="start-status"
              checked={formData["step0"]["I'm already selling"]}
              onChange={() => handleChange("I'm already selling", "step0")}
            ></input>
            <label htmlFor="I'm-already-selling">
              I’m already selling online or in person
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

const StepOne = ({ formData, handleChange }) => {
  return (
    <div className="step">
      <svg></svg>
      <progress value="1" max="3"></progress>
      <h2>Where would you like to sell?</h2>
      <p>
        Pick as many as you like – you can always change these later. We'll make
        sure you're set up to sell in these places.
      </p>
      <form>
        <div className="pre-signup-grid">
          <GridItem
            option={preSignupOptions[0].options[0]}
            handleChange={() => handleChange("An online store", "step1")}
            id="An-online-store"
            checked={formData["step1"]["An online store"]}
          />
          <GridItem
            option={preSignupOptions[0].options[1]}
            handleChange={() => handleChange("In person", "step1")}
            id="In-person"
            checked={formData["step1"]["In person"]}
          />
          <GridItem
            option={preSignupOptions[0].options[2]}
            handleChange={() =>
              handleChange("An existing website or blog", "step1")
            }
            id="An-existing-website-or-blog"
            checked={formData["step1"]["An existing website or blog"]}
          />
          <GridItem
            option={preSignupOptions[0].options[3]}
            handleChange={() => handleChange("Social media", "step1")}
            id="Social-media"
            checked={formData["step1"]["Social media"]}
          />
          <GridItem
            option={preSignupOptions[0].options[4]}
            handleChange={() => handleChange("Online marketplaces", "step1")}
            id="Online-marketplaces"
            checked={formData["step1"]["Online marketplaces"]}
          />
          <GridItem
            option={preSignupOptions[0].options[5]}
            handleChange={() => handleChange("I'm not sure", "step1")}
            id="I'm-not-sure"
            checked={formData["step1"]["I'm not sure"]}
          />
        </div>
      </form>
    </div>
  )
}

const StepTwo = ({ formData, handleChange }) => {
  return (
    <div className="step">
      <svg></svg>
      <progress value="2" max="3"></progress>
      <h2>What do you plan to sell first?</h2>
      <p>
        Pick as many as you like – you can always change these later. We'll make
        sure you're set up to sell these items.
      </p>
      <form>
        <div className="pre-signup-grid">
          <GridItem
            option={preSignupOptions[1].options[0]}
            handleChange={() => handleChange("Products I buy or make myself", "step2")}
            id="Products-I-buy-or-make-myself"
            checked={formData["step2"]["Products I buy or make myself"]}
          />
          <GridItem
            option={preSignupOptions[1].options[1]}
            handleChange={() => handleChange("Digital products", "step2")}
            id="Digital-products"
            checked={formData["step2"]["Digital products"]}
          />
          <GridItem
            option={preSignupOptions[1].options[2]}
            handleChange={() => handleChange("Dropshipping products", "step2")}
            id="Dropshipping-products"
            checked={formData["step2"]["Dropshipping products"]}
          />
          <GridItem
            option={preSignupOptions[1].options[3]}
            handleChange={() => handleChange("Services", "step2")}
            id="Services"
            checked={formData["step2"]["Services"]}
          />
          <GridItem
            option={preSignupOptions[1].options[4]}
            handleChange={() => handleChange("Print-on-demand products", "step2")}
            id="Print-on-demand-products"
            checked={formData["step2"]["Print-on-demand products"]}
          />
          <GridItem
            option={preSignupOptions[1].options[5]}
            handleChange={() => handleChange("I'll decide later", "step2")}
            id="I'll-decide-later"
            checked={formData["step2"]["I'll decide later"]}
          />
        </div>
      </form>
    </div>
  )
}

const StepThree = ({ step3Data, handleChange, handleChangeStep3Data }) => {
  const countries = ["India", "Pakistan", "Myanmar"]
  return (
    <div className="step step--4">
      <svg></svg>
      <h2>Where will your business be located?</h2>
      <p>
        We’ll use your location to set up your default shipping rates,
        recommended apps, and more.
      </p>
      {/* dropdown with India, Pakistan, Myanmar as the dropdown options available*/}
      <select
        onChange={(e) => handleChangeStep3Data(e.target.value, "step3")}
        value={step3Data.step3.country}
      >
        <option value="" disabled>
          Select a country
        </option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  )
}

const PreSignupPage = () => {
  const [formData, setFormData] = useState({
    "step0": {
    "I'm just starting": false,
    "I'm already selling": false,
    },
    "step1":
    {"An online store": false,
    "In person": false,
    "An existing website or blog": false,
    "Social media": false,
    "Online marketplaces": false,
      "I'm not sure": false,
    },
    "step2":
    {"Products I buy or make myself": false,
    "Digital products": false,
    "Dropshipping products": false,
    "Services": false,
    "Print-on-demand products": false,
      "I'll decide later": false,
    }
  })
  const [step3Data, setStep3Data] = useState({
    "step3": {
      "country": "India"
    }
  })

  const states = [
    "get-started",
    "like-to-sell",
    "plan-to-sell-first",
    "where-business-located",
  ]

  const [currState, setCurrState] = useState(0)
  const navigate = useNavigate()

  const handleChange = (title, step) => {
    if (step === "step0") {
      console.log('error here', step, formData[step])
      setFormData((prevFormData) => ({
        ...prevFormData,
        [step]: Object.fromEntries(
          Object.keys(prevFormData[step]).map(key => [key, key === title])
        )
      }))
    } 
    else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [step]: {
            ...prevFormData[step],
            [title]: !prevFormData[step][title],
          }
      }))
    }
  }
  const handleChangeStep3Data = (country, step) => {
    setStep3Data((prevFormData) => ({
      ...prevFormData,
      [step]: {
        "country": country
      }
    }))
  }
  console.log(formData)
  console.log(step3Data)

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/presignup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, ...step3Data }),
      });
      if (response.ok) {
        console.log("Data submitted successfully!");
      }
    } catch (error) {
      console.error(error);
    }
  }
  console.log(currState)

  const resetStepData = (step) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: Object.fromEntries(
        Object.keys(prevData[step]).map((key) => [key, false])
      ),
    }))
  }

  const handleNavigation = (action) => {
    switch (action) {
      case "back":
        setCurrState((prevState) => Math.max(0, prevState - 1));
        break;
      case "next":
        if (currState === 3) {
          handleSubmit();
          navigate('/signup')
        }
        setCurrState((prevState) => prevState + 1);
        break;
      case "skip":
        resetStepData(`step${currState}`)
        setCurrState((prevState) => prevState + 1);
        break;
      case "skip all":
        resetStepData(`step0`)
        resetStepData(`step1`)
        resetStepData(`step2`)
        setCurrState(3);
        break;
      default:
        break;
    }
  };

  return (
    <div className="pre-signup-page">
      <div className="white-box">
        {currState === 0 && <StepZero formData={formData} handleChange={handleChange} />}
        {currState === 1 && <StepOne formData={formData} handleChange={handleChange} />}
        {currState === 2 && <StepTwo formData={formData} handleChange={handleChange} />}
        {currState === 3 && (
          <StepThree
            step3Data={step3Data}
            handleChange={handleChange}
            handleChangeStep3Data={handleChangeStep3Data}
          />
        )}
        <div className="buttons">
          {currState > 0 && (
            <button onClick={() => handleNavigation("back")}>Back</button>
          )}
          {currState !== 3 && <button onClick={() => handleNavigation("skip all")}>Skip all</button>}
          {currState !== 3 && <button onClick={() => handleNavigation("skip")}>Skip</button>}
          <button
            onClick={() => {
              handleNavigation("next");
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreSignupPage
