import './App.css'
import Header from '../header/Header'
import Main from '../main/Main'
import Card from '../card/Card'
import Footer from '../footer/Footer'
import React from 'react'
import { useState } from 'react'

function App({ data }) {
  const [activeHouse, setActiveHouse] = useState('Gryffindor')
  function handleFooterButtonClick(house) {
    setActiveHouse(house)
  }
  const filteredData = data.filter(character => character.house === activeHouse)
  return (
    <div>
      <Header />
      <Main activeHouse={activeHouse}>
        {filteredData.map(character => (
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
