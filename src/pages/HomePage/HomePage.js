import React from "react"
import { useState } from "react"

import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="grey-box">
        <h1>Get ready to sell</h1>
        <p>
          Here’s a guide to get started. As your business grows, you’ll get
          fresh tips and insights here.
        </p>
        <div className="setup-guide">
          <div className="flex-column">
            <h1>Setup guide</h1>
            <p>Use this personalized guide to get your store up and running.</p>
            <div>
              <p>0 / 11 completed</p>
            </div>
          </div>
          <svg></svg>
        </div>
        <button className="add-products">
          <h3>Add products</h3>
          <svg></svg>
        </button>
        <div className="flex-column">
          <svg></svg>
          <div>
            <a>
              <span>Add your first product</span>
            </a>
            <span>
              Write a description, add photos, and set pricing for the products
              you plan to sell.
            </span>
            <a>
              <span>Learn more</span>
            </a>
            <div className="flex-row">
              <a>
                <span>Add products</span>
              </a>
              <a>
                <span>Import products</span>
              </a>
            </div>
          </div>
          <div className="img-container">
            <img></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
