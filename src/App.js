import React from 'react'
import { Article,Brand,Cta,Feature,Navbar } from './components/index.js'
import {Blog,Featurec,Footer,Header,Possibility,WhatGPT3} from './containers/index.js'


import './App.css';
const App = () => {
  return (
    <>
      <div className='App rtx'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand/>
        <WhatGPT3 />
        <Featurec />
        <Possibility />
        <Cta/>
        <Blog/>
        <Footer/>
      </div>
    </>
  )
}

export default App