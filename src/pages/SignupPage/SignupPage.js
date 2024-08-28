import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./SignupPage.css"

const SignupPage = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    "confirm-password": "",
  })
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData["confirm-password"]) {
      setError("Passwords do not match")
      return
    }
    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      console.log(response)
      const data = await response.json()
      if (response.ok) {
        localStorage.setItem('token', data.token)
        navigate('/')
      }
      else {
        setError(data.message || "Error in signup")
      }
    } catch (err) {
      console.error(err)
      setError("Error in signup")
    }
  }

return (
  <div className="signup-page">
    {/* Add your JSX content here */}
    <div
      className={`white-box ${
        formData["email"] !== "" &&
        formData["firstname"] !== "" &&
        formData["lastname"] !== "" &&
        formData["password"] !== "" &&
        formData["confirm-password"] !== ""
          ? "white-box-big"
          : ""
      }`}
    >
      <div className="step">
        <svg viewBox="0 0 609 177" xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/')}>
          <g fill="none" fill-rule="evenodd">
            <path
              d="M130.8 32.7c-.1-.9-.8-1.3-1.4-1.3l-12.7-.3-11.1-10.8c-1-1-3-.8-3.7-.5l-5 1.6c-.6-1.7-1.4-3.8-2.5-6-3.5-6.8-8.9-10.5-15.2-10.5a5 5 0 00-1.4.2l-.6-.7C74.4 1.5 71 .1 66.6.2c-8.1.2-16.3 6.2-23 16.7a68.7 68.7 0 00-9.3 23.8c-9.3 3-16 5-16.2 5-4.7 1.5-4.8 1.6-5.4 6.1C12.4 55.2 0 151.3 0 151.3l104.3 18 45.1-11.1-18.6-125.5zm-39.2-9.6l-8 2.5c0-4.1-.7-10-2.5-14.8 6.2 1 9.3 8 10.5 12.3zM78 27.2l-17.4 5.4a42 42 0 018.7-17c1.5-1.7 3.6-3.4 5.9-4.3 2.4 4.7 2.9 11.4 2.8 16zM66.9 5.7c2 0 3.5.3 4.8 1.3a21.6 21.6 0 00-6.3 5 47.5 47.5 0 00-10.8 22.6L40.3 39c3-13.2 14-33 26.6-33.3z"
              fill="#95BF47"
            />
            <path
              d="M129.4 31.4l-12.7-.3-11.1-10.8a2 2 0 00-1.3-.6v149.7l45.1-11.2L131 32.7c-.2-.9-1-1.3-1.5-1.3z"
              fill="#5E8E3E"
            />
            <path
              d="M79.2 54.6l-5.3 19.6s-5.8-2.6-12.8-2.2C51 72.6 51 79.1 51 80.7c.6 8.8 23.6 10.7 25 31.3 1 16.2-8.5 27.3-22.4 28.1a34.2 34.2 0 01-25.7-8.9l3.5-15s9.3 7 16.6 6.5a6.5 6.5 0 006.3-7c-.7-11.4-19.5-10.7-20.7-29.5-1-15.9 9.4-31.8 32.3-33.3 8.9-.6 13.4 1.7 13.4 1.7z"
              fill="#FFF"
            />
            <g fill="#000">
              <path d="M210.6 96.4c-5.2-2.8-8-5.2-8-8.5 0-4.2 3.9-6.8 9.7-6.8 6.8 0 13 2.8 13 2.8l4.7-14.7s-4.4-3.4-17.3-3.4c-18 0-30.6 10.4-30.6 24.9 0 8.3 5.8 14.5 13.6 19 6.4 3.5 8.6 6 8.6 9.8 0 4-3.2 7.1-9 7.1-8.7 0-17-4.5-17-4.5l-5.1 14.6s7.6 5.1 20.3 5.1c18.6 0 32-9.1 32-25.5-.2-9-6.9-15.3-15-19.9zM284.4 65.6c-9.1 0-16.3 4.4-21.8 11l-.2-.2 7.9-41.4h-20.6l-20.1 105.5h20.6l6.8-36c2.7-13.7 9.7-22.1 16.3-22.1 4.6 0 6.5 3.2 6.5 7.7 0 2.8-.3 6.3-.9 9.1l-7.8 41.3h20.6l8-42.6c.9-4.5 1.5-9.9 1.5-13.6.1-11.7-6-18.7-16.8-18.7zM348 65.6c-24.9 0-41.3 22.4-41.3 47.4 0 16 9.9 28.8 28.4 28.8 24.3 0 40.8-21.8 40.8-47.3.1-14.8-8.6-29-28-29zM337.9 126c-7 0-10-6-10-13.5 0-11.8 6-31 17.3-31 7.3 0 9.7 6.3 9.7 12.4 0 12.6-6.2 32.1-17 32.1zM428.7 65.6C415 65.6 407 77.9 407 77.9h-.2l1.2-11.1h-18.3c-.8 7.4-2.5 18.9-4.1 27.4l-14.4 75.5h20.6l5.7-30.5h.5s4.3 2.6 12 2.6c24.3 0 40.2-24.8 40.2-50 0-13.8-6.3-26.2-21.4-26.2zM409 126.4c-5.4 0-8.5-3-8.5-3l3.4-19.3c2.4-13 9.1-21.5 16.3-21.5 6.3 0 8.3 5.9 8.3 11.4 0 13.4-8 32.4-19.5 32.4zM479.5 36c-6.6 0-11.8 5.2-11.8 12 0 6 4 10.3 9.8 10.3h.2c6.5 0 12-4.4 12-12 0-6-4-10.3-10.2-10.3zM450.7 140.4h20.5l14-73.1h-20.7zM537.7 67.2h-14.3l.7-3.4c1.2-7.1 5.4-13.3 12.3-13.3 3.7 0 6.6 1 6.6 1l4-16.1s-3.5-1.8-11.2-1.8a31 31 0 00-20.2 6.8c-7 6-10.4 14.6-12 23.4l-.6 3.4h-9.6l-3 15.6h9.6l-11 57.7h20.6l11-57.7h14.2l3-15.6zM587.4 67.3s-12.9 32.5-18.6 50.3h-.2c-.4-5.7-5.2-50.3-5.2-50.3h-21.6l12.4 67.1c.2 1.5.1 2.4-.5 3.4a36.1 36.1 0 01-11.2 12.4 47.6 47.6 0 01-11.7 5.9l5.7 17.5c4.2-.8 13-4.4 20.2-11.2a138 138 0 0027-41L609 67.4h-21.6z" />
            </g>
          </g>
        </svg>
        <h2>Create a Shopify account</h2>
        <h3>One last step before starting your free trial.</h3>
        <div className="flex-column-container">
          <div className="signup-input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="name-flex-row-container">
            <div className="signup-input-wrapper">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="signup-input-wrapper">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <p>
            Enter your first and last name as they appear on your
            government-issued ID.
          </p>
          <div className="signup-input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="password-guidelines">
            {formData["email"] !== "" &&
              formData["firstname"] !== "" &&
              formData["lastname"] !== "" &&
              formData["password"] !== "" &&
              formData["confirm-password"] !== "" && (
                <span>
                  Your password must be at least 8 characters, and can’t begin
                  or end with a space.
                </span>
              )}
          </div>
          <div className="signup-input-wrapper">
            <label htmlFor="confirm-password">Confirm new password</label>
            <input
              type="text"
              id="confirm-password"
              name="confirm-password"
              onChange={handleChange}
              required
            ></input>
          </div>
          <button onClick={handleSubmit}>Create Shopify account</button>
          <div className="help-link">
            <p>
              <span>Already have a Shopify account? </span>
              <a href="/login">Log In</a>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.49951 10C3.49951 9.58579 3.8353 9.25 4.24951 9.25L13.9391 9.25L11.2192 6.53036C10.9263 6.23748 10.9263 5.7626 11.2192 5.4697C11.512 5.17679 11.9869 5.17676 12.2798 5.46964L16.2802 9.46964C16.4209 9.6103 16.4999 9.80107 16.4999 10C16.4999 10.1989 16.4209 10.3897 16.2802 10.5304L12.2798 14.5304C11.9869 14.8232 11.512 14.8232 11.2192 14.5303C10.9263 14.2374 10.9263 13.7625 11.2192 13.4696L13.9391 10.75L4.24951 10.75C3.8353 10.75 3.49951 10.4142 3.49951 10Z"
                  fill="currentColor"
                ></path>
              </svg>
            </p>
          </div>
          <div className="footer">
            <p>
              By proceeding, you agree to the <a>Terms and Conditions</a> and
              <a> Privacy Policy</a>
            </p>
            <div className="footer-links">
              <a>Help</a>
              <a>Privacy</a>
              <a>Terms</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default SignupPage
