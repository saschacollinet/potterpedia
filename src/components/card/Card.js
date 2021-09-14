import './Card.css'
import deceased from '../images/deceased.png'

function Card(props) {
  const dead = props.alive
  return (
    <section className="flip-card-container">
      <div className="flip-card">
        <div className="flip-card-front">
          <img
            className="flip-card-front-image"
            src={props.image}
            alt={`of ${props.name}`}
          />
          {dead ? (
            console.log(true)
          ) : (
            <img className="deceased" src={deceased} alt="deceased" />
          )}
        </div>
        <div className="flip-card-back">
          <div className="flip-card-back-text">
            <h2>{props.name}</h2>
            <p>Species: {props.species}</p>
            <p>Gender: {props.gender}</p>
            <p>House: {props.house}</p>
            <p>Date of birth: {props.dateOfBirth}</p>
            <p>Ancestry: {props.ancestry}</p>
            <p>Patronus: {props.patronus}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card
