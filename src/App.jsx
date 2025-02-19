import './App.css'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


import './Styles.css'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Greeting" />
    </>
  )
}

export default App
