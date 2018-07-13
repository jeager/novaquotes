import React, { Component } from 'react'
import { QuoteCard } from '../quotes-card'
import { fetchQuotes } from '../../services/quotes'
import './style.css'

class Quotes extends Component {
  constructor (props) {
    super(props)
    this.renderQuotes = this.renderQuotes.bind(this)
    this.state = {
      quotes: []
    }
  }

  componentDidMount () {
    let quotes = fetchQuotes().then(response => {
      this.setState({quotes: response})
    })
  }

  renderQuotes () {
    return this.state.quotes.map((quote, i) => {
      return <QuoteCard key={quote.id} quote={quote} index={i}/>
    })
  }

  render () {
    return (
      <div className="quotes">
        {this.renderQuotes()}
      </div>
    )
  }
}

export default Quotes
