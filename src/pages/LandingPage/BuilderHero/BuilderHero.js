import image1 from "./landing-builder-hero-1.webp"
import image2 from "./landing-builder-hero-2.webp"
import image3 from "./landing-builder-hero-3.webp"
import image4 from "./landing-builder-hero-4.png"
import './BuilderHero.css'

import { Link } from "react-router-dom"

const WebsiteBuilder = () => {
  return (
    <div className="min-width-wrapper">
      <div className="website-builder">
        <div className="content-wrapper">
          <div className="text-content">
            <section className="headline">
              <h1>Website Builder 2024 | Create a Website in Minutes</h1>
              <p>Easily create stunning, secure, and full-featured websites</p>
            </section>
            <div className="cta-form">
              <input placeholder="Enter your email address" />
              <Link to ='/presignup'>
                <button>Start free trial</button>
              </Link>
            </div>
          </div>
          <div className="image-gallery">
            <div className="gallery-item">
              <img src={image1} alt="Website Builder Example 1" />
            </div>
            <div className="gallery-item">
              <img src={image2} alt="Website Builder Example 2" />
            </div>
            <div className="gallery-item">
              <img src={image3} alt="Website Builder Example 3" />
            </div>
            <div className="gallery-item">
              <img src={image4} alt="Website Builder Example 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebsiteBuilder
