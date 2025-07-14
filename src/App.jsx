import React from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'




function App() {


  return (
    <div className="overflow-x-hidden w-full">
    
      <Header />
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
