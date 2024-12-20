// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Features from './Components/Features'
import Story from './Components/Story'
import Contact from './Components/Contact'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
    </main>
  )
}

export default App