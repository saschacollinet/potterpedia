import './App.css'
import Header from '../header/Header'
import Main from '../main/Main'
import Card from '../card/Card'
import Footer from '../footer/Footer'
import React from 'react'
import { useState } from 'react'

function App({ data }) {
  const [activeHouse, setActiveHouse] = useState(() => {
    if (localStorage.getItem('activeHouseLocalStorage')) {
      return JSON.parse(localStorage.getItem('activeHouseLocalStorage'))
    } else {
      return 'All'
    }
  })

  function handleFooterButtonClick(newActivehouse) {
    if (activeHouse === newActivehouse) {
      setActiveHouse('All')
    } else {
      setActiveHouse(newActivehouse)
    }
    const stringifiedValue = JSON.stringify(newActivehouse)
    if (stringifiedValue === JSON.stringify(activeHouse)) {
      localStorage.removeItem('activeHouseLocalStorage')
    } else {
      localStorage.setItem('activeHouseLocalStorage', stringifiedValue)
    }
  }

  const filteredData = data.filter(character => character.house === activeHouse)

  const shownData = activeHouse === 'All' ? data : filteredData

  return (
    <div>
      <Header />
      <Main activeHouse={activeHouse}>
        {shownData.map(character => (
          <Card
            image={character.image}
            name={character.name}
            species={character.species}
            gender={character.gender}
            house={character.house}
            dateOfBirth={character.dateOfBirth}
            ancestry={character.ancestry}
            patronus={character.patronus}
            alive={character.alive}
            key={character.name}
          />
        ))}
      </Main>
      <Footer
        activeHouse={activeHouse}
        onFooterButtonClick={handleFooterButtonClick}
      />
    </div>
  )
}

export default App
