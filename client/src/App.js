import React, { Component } from 'react'
import logo from './Marca_Novatics_negativo.png'
import './App.css'
import * as QuoteService from './services/QuotesService'
import Quotes from './components/quotes/Quotes'
import QuotesFilter from './components/quotes/QuotesFilter'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quotes: []
    }
  }

  async componentDidMount () {
    let quotes = await QuoteService.fetchQuotes()
    this.setState({quotes})
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro">
          <QuotesFilter>
            <Quotes quotes={this.state.quotes}/>
          </QuotesFilter>
        </div>
      </div>
    )
  }
}

export default App
