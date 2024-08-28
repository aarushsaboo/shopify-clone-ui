import './BuilderPerks.css'


const BuilderPerks = ({ svg, heading, content }) => {
  return (
    <>
      <ul className="builder-perks__flex-container">
        <li className="builder-perks__flex-item">
          <div className="block">
            <img src={svg} className="icon icon--size-small block__icon" alt=""></img>
            <h3 className="block__heading heading--4">{heading}</h3>
            <p className="block__content">{content}</p>
          </div>
        </li>
      </ul>
    </>
  )
}

export default BuilderPerks
