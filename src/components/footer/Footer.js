import './Footer.css'
import Gryffindor from '../images/gryffindor.png'
import Slytherin from '../images/slytherin.png'
import Ravenclaw from '../images/ravenclaw.png'
import Hufflepuff from '../images/hufflepuff.png'
import { useState } from 'react'

function Footer() {
  const [activeHouse, setActiveHouse] = useState('Gryffindor')
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <button
          className={`footer__button ${
            activeHouse === 'Gryffindor' ? 'footer-active' : ''
          }`}
          id="footer__gryffindor"
          onClick={() => setActiveHouse('Gryffindor')}
        >
          <img src={Gryffindor} alt="Gryffindor" className="footer__img" />
        </button>
        <button
          className={`footer__button ${
            activeHouse === 'Slytherin' ? 'footer-active' : ''
          }`}
          id="footer__slytherin"
          onClick={() => setActiveHouse('Slytherin')}
        >
          <img src={Slytherin} alt="Slytherin" className="footer__img" />
        </button>
        <button
          className={`footer__button ${
            activeHouse === 'Ravenclaw' ? 'footer-active' : ''
          }`}
          id="footer__ravenclaw"
          onClick={() => setActiveHouse('Ravenclaw')}
        >
          <img src={Ravenclaw} alt="Ravenclaw" className="footer__img" />
        </button>
        <button
          className={`footer__button ${
            activeHouse === 'Hufflepuff' ? 'footer-active' : ''
          }`}
          id="footer__hufflepuff"
          onClick={() => setActiveHouse('Hufflepuff')}
        >
          <img src={Hufflepuff} alt="Hufflepuff" className="footer__img" />
        </button>
      </nav>
    </footer>
  )
}

export default Footer
