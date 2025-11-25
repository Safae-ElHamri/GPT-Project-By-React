import React from 'react';
import './features.css';

const Features = ({ title, text }) => {
  return (
    <div className='gpt3__features'>
      <div className='gpt3__features-heading'>
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container'>
        {text}
      </div>
    </div>
  )
}

export default Features