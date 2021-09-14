import './App.css'
import data from '../../data.json'
import Header from '../header/Header'
import Main from '../main/Main'
import Card from '../card/Card'
import Footer from '../footer/Footer'
import React from 'react'

function App() {
  return (
    <div>
      <Header />
      <Main>
        {data.map(character => (
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
      <Footer />
    </div>
  )
}

export default App
