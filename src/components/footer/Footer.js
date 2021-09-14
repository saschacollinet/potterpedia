import './Footer.css'
import Gryffindor from '../images/gryffindor.png'
import Slytherin from '../images/slytherin.png'
import Ravenclaw from '../images/ravenclaw.png'
import Hufflepuff from '../images/hufflepuff.png'

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <button className="footer__button" id="footer__gryffindor">
          <img src={Gryffindor} alt="Gryffindor" className="footer__img" />
        </button>
        <button className="footer__button" id="footer__slytherin">
          <img src={Slytherin} alt="Slytherin" className="footer__img" />
        </button>
        <button className="footer__button" id="footer__ravenclaw">
          <img src={Ravenclaw} alt="Ravenclaw" className="footer__img" />
        </button>
        <button className="footer__button" id="footer__hufflepuff">
          <img src={Hufflepuff} alt="Hufflepuff" className="footer__img" />
        </button>
      </nav>
    </footer>
  )
}

export default Footer
