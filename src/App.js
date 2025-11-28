import React from 'react';

import Blog from './container/blog/Blog';
import Features from './container/features/Features';
import Footer from './container/footer/Footer';
import Header from './container/header/Header';
import Possibility from './container/possibility/Possibility';
import WhatGPT3 from './container/whatGPT3/WhatGPT3';
import Thefuture from './container/thefuture/Thefuture';

import Brand from './components/brand/Brand';
import CTA from './components/cta/CTA';
import Navbar from './components/navbar/Navbar';
import './App.css';
import { Feature } from './container';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Thefuture />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App