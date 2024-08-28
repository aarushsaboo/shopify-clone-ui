import img1 from './landing-lazyloaded-1.webp'
import img2 from "./landing-lazyloaded-2.webp"
import img3 from "./landing-lazyloaded-3.webp"
import img4 from "./landing-lazyloaded-4.webp"
import './PillarsBusinessBase.css'

const PillarsBusinessBase = () => {
  return (
    <div className="pillars-business-base">
      <div className="pillars-business-base-container">
        <h2>24/7 Support Team</h2>
        <div className="pillars-business-base-container-content">
          <p>
            We’re here to help! Shopify has an extensive team of people here to
            help you succeed. Shopify’s support team is available 24/7 to help
            answer your questions.
          </p>
          <p>
            You can also hire a Shopify Expert to help build your website. Or
            look through our educational resources including, online courses,
            webinars, and blog posts to help you promote your products and build
            your online presence.
          </p>
        </div>
        <div className="image-container">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PillarsBusinessBase