import React from 'react'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Hero from './components/Hero'
import About from './components/About'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Testimonial />
    </div>
  )
}

export default App
