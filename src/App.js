import React from 'react'
import { About, Footer, Header, Skills, Testimonial, Work, } from './container/Index';
import { Navbar } from './components';
import './App.scss';



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />

      {/* <h1>Hello and welcome </h1> */}
    </div>
  )
}

export default App