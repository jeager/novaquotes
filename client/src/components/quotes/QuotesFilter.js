import React from 'react'

class QuotesFilters extends React.Component {
  render () {
    return (
      <div>
        <input type='checkbox'/> Filtro 1
        <input type='checkbox'/> Filtro 2
        <input type='checkbox'/> Filtro 3
        {this.props.children}
      </div>
    )
  }
}

export default QuotesFilters
