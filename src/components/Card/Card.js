import React from 'react';
import './card.css';

const Card = ({emoji, Title, Description}) => {
  return (
    <div className='card'>
      <span>{emoji}</span>
     <h4>{Title}</h4>
      <p>{Description}</p>
      <button className='card-button'>LEARN MORE</button>
    </div>
  )
}

export default Card