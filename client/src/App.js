import React, { Component } from 'react'
import logo from './Marca_Novatics_negativo.png'
import './App.css'
import Quotes from './components/quotes'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro">
          <Quotes/>
        </div>
      </div>
    )
  }
}

export default App
