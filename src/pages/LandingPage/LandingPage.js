import "./LandingPage.css"
import BuilderHero from "./BuilderHero/BuilderHero"
import PillarsGetBuilder from "./PillarsGetBuilder/PillarsGetBuilder"
import PillarsBuilderFeatures from "./PillarsBuilderFeatures/PillarsBuilderFeatures"
import BuilderPerks from "./BuilderPerks/BuilderPerks"
import PillarsBusinessBase from "./PillarsBusinessBase/PillarsBusinessBase"
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions/FrequentlyAskedQuestions"
import { builderFeaturesContent } from "../../constants/content"
import { builderPerksContent } from "../../constants/perks"

import img2 from "./PillarsBuilderFeatures/landing-2.png"
import img3 from "./PillarsBuilderFeatures/landing-3.webp"
import img4 from "./PillarsBuilderFeatures/landing-4.webp"

import svg1 from "./BuilderPerks/bookmark.png"
import svg2 from "./BuilderPerks/workplace.png"
import svg3 from "./BuilderPerks/padlock.png"
import svg4 from "./BuilderPerks/calendar.png"
import svg5 from "./BuilderPerks/data-analytics.png"
import svg6 from "./BuilderPerks/magnifying-glasss.png"

const LandingPage = () => {
  const getImage = (src) => {
    switch (src) {
      case "landing-2.png":
        return img2
      case "landing-3.webp":
        return img3
      case "landing-4.webp":
        return img4
      default:
        return img2
    }
  }
  const getSvg = (src) => {
    switch (src) {
      case "svg1":
        return svg1
      case "svg2":
        return svg2
      case "svg3":
        return svg3
      case "svg4":
        return svg4
      case "svg5":
        return svg5
      case "svg6":
        return svg6
      default:
        return svg1
    }
  }
  return (
    <div>
      <BuilderHero />
      <div className="pillars-builder">
        {builderFeaturesContent.map((feature, index) => (
          <PillarsBuilderFeatures
            key={index}
            title={feature.title}
            headline1={feature.headline1}
            content1={feature.content1}
            headline2={feature.headline2}
            content2={feature.content2}
            featureLinkList={feature.featureListLink}
            imageSrc={getImage(feature.imageSrc)}
          />
        ))}
      </div>
      <PillarsGetBuilder />
      <div className="builder-perks">
        <div className="section-heading">
          <h2 className="section-heading__heading--1">
            A website builder with perks
          </h2>
        </div>
        <div className="builder-perks-grid">
          {builderPerksContent.map((perk, index) => (
            <BuilderPerks
              key={index}
              svg={getSvg(perk.svg)}
              heading={perk.heading}
              content={perk.content}
            />
          ))}
        </div>
      </div>
      <div className="pillars-business-base-container">
        <PillarsBusinessBase />
        <FrequentlyAskedQuestions />
      </div>
    </div>
  )
}

export default LandingPage
