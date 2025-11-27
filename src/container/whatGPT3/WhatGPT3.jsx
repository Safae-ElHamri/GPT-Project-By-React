import React from 'react';
import './whatGPT3.css';
import Features from '../features/Features';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-features'>
        
          <div className="gpt3__whatgpt3-features__title">
            <h1>What is GPT-3</h1>
          </div>
          <div className="gpt3__whatgpt3-features__text">
            <p> We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
          </div>
        
      </div>
      
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient-text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        < Features title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. ' />
        < Features title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
        < Features title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
      </div>
    </div>
  )
}

export default WhatGPT3