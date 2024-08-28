import './PillarsBuilderFeatures.css'

const PillarsBuilderFeatures = ({title, headline1, content1, headline2, content2, featureLinkList, imageSrc}) => {
  return (
    <div className="builder-features-container">
      <div className="builder-features-description">
        <h2>{title}</h2>
        <p className="builder-features-description-p-headline">
          {headline1}
        </p>
        <p className="builder-features-description-p-content">
          {content1}
        </p>
        <p className="builder-features-description-p-headline">
          {headline2}
        </p>
        <p className="builder-features-description-p-content">
          {content2}
        </p>
        <a>{featureLinkList}</a>
      </div>
      <div className="builder-features-image-container">
        <img src={imageSrc} alt="Feature Illustration" />
      </div>
    </div>
  )
}

export default PillarsBuilderFeatures
