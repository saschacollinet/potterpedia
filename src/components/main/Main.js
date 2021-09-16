import './Main.css'

function Main({ activeHouse, children }) {
  return <main className={`main ${activeHouse}`}>{children}</main>
}

export default Main
