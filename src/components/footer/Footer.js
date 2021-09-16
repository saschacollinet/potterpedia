import './Footer.css'
import Gryffindor from '../images/gryffindor.png'
import Slytherin from '../images/slytherin.png'
import Ravenclaw from '../images/ravenclaw.png'
import Hufflepuff from '../images/hufflepuff.png'

function Footer({ activeHouse, onFooterButtonClick }) {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <button
          className={`footer__button ${
            activeHouse === 'Gryffindor' ? 'footer-active' : ''
          }`}
          id="footer__gryffindor"
          onClick={() => onFooterButtonClick('Gryffindor')}
        >
          <img src={Gryffindor} alt="Gryffindor" className="footer__img" />
        </button>
        <button
          className={`footer__button ${
            activeHouse === 'Slytherin' ? 'footer-active' : ''
          }`}
          id="footer__slytherin"
          onClick={() => onFooterButtonClick('Slytherin')}
        >
          <img src={Slytherin} alt="Slytherin" className="footer__img" />
        </button>
        <button
          className={`footer__button ${
            activeHouse === 'Ravenclaw' ? 'footer-active' : ''
          }`}
          id="footer__ravenclaw"
          onClick={() => onFooterButtonClick('Ravenclaw')}
        >
          <img src={Ravenclaw} alt="Ravenclaw" className="footer__img" />
        </button>
        <button
          className={`footer__button ${
            activeHouse === 'Hufflepuff' ? 'footer-active' : ''
          }`}
          id="footer__hufflepuff"
          onClick={() => onFooterButtonClick('Hufflepuff')}
        >
          <img src={Hufflepuff} alt="Hufflepuff" className="footer__img" />
        </button>
      </nav>
    </footer>
  )
}

export default Footer
