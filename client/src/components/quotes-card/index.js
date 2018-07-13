import React from 'react'
import './style.css'
import '../../Animate.css'
export const QuoteCard = (props) => {
  return (
    <div className={`animated flipInY card ${props.index % 2 === 0 ? 'even' : 'odd'}`}>
      <div className='card-author'>
        <h4 className='card-author-name'>{props.quote.user.name}</h4>
      </div>
      <div className='card-description'>
        <p>{props.quote.description}</p>
      </div>
      <div className='card-photo-container'>
        <img className='card-photo' src={props.quote.user.photo}/>
      </div>
    </div>
  )
}
