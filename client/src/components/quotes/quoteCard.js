import React from 'react'
import './quoteCard.css'
export const QuoteCard = (props) => {
  return (
    <div className="card">
      <div className='card-author'>
        <h4 className="card-author-name">{props.quote.user.name}</h4>
      </div>
      <div>
        <p>{props.quote.description}</p>
      </div>
      <img className="card-photo" src={props.quote.user.photo}/>
    </div>
  )
}
