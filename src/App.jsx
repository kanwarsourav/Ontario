import React from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import WorkVisa from './components/OurServices/WorkVisa'



function App() {


  return (
    <>

      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/ourservices" element={<OurServices/>} />
          <Route path="/workvisa" element={<WorkVisa/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
