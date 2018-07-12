import React from 'react'
import { QuoteCard } from './quoteCard'
import './Quotes.css'

class Quotes extends React.Component {
  constructor (props) {
    super(props)
    this.renderQuotes = this.renderQuotes.bind(this)
  }

  renderQuotes () {
    return this.props.quotes.map(quote => {
      return <QuoteCard key={quote.id} quote={quote}/>
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
