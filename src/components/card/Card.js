import './Card.css'
import deceased from '../images/deceased.png'
import arrow from '../images/arrow-u-left-top.svg'
import { useState } from 'react'

function Card(props) {
  const [isPageTurned, setIsPageTurned] = useState(false)
  const [emoji, setEmoji] = useState('')
  const isAlive = props.alive
  const handleTurnPageButtonClick = () => {
    setIsPageTurned(!isPageTurned)
  }
  const handleEmojiButtonClick = currentEmoji => {
    if (emoji === currentEmoji) {
      setEmoji('')
    } else {
      setEmoji(currentEmoji)
    }
  }
  return (
    <section className="flip-card-container">
      <div className={`flip-card ${isPageTurned ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          <img
            className="flip-card-front-image"
            src={props.image}
            alt={`of ${props.name}`}
          />
          {!isAlive && (
            <img className="deceased" src={deceased} alt="deceased" />
          )}
          <button
            className="turn-page-button-front"
            onClick={handleTurnPageButtonClick}
          >
            <img src={arrow} alt="Turn page" />
          </button>
        </div>
        <div className="flip-card-back">
          <div className="flip-card-back-text">
            <div className="emoji-button-bar">
              <button
                className="emoji-button"
                onClick={() => handleEmojiButtonClick('🤓')}
              >
                🤓
              </button>
              <button
                className="emoji-button"
                onClick={() => handleEmojiButtonClick('⚡️')}
              >
                ⚡️
              </button>
              <button
                className="emoji-button"
                onClick={() => handleEmojiButtonClick('🧠')}
              >
                🧠
              </button>
              <button
                className="emoji-button"
                onClick={() => handleEmojiButtonClick('💀')}
              >
                💀
              </button>
            </div>
            <h2>
              {emoji} {props.name}
            </h2>
            <p>Species: {props.species}</p>
            <p>Gender: {props.gender}</p>
            <p>House: {props.house}</p>
            <p>Date of birth: {props.dateOfBirth}</p>
            <p>Ancestry: {props.ancestry}</p>
            <p>Patronus: {props.patronus}</p>
          </div>
          <button
            className="turn-page-button-back"
            onClick={handleTurnPageButtonClick}
          >
            <img src={arrow} alt="Turn page" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Card
