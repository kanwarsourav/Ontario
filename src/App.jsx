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
import TouristVisa from './components/OurServices/TouristVisa'
import StudentVisa from './components/OurServices/StudentVisa'
import BusinessVisa from './components/OurServices/BusinessVisa'
import ScrollToTop from './components/ScrollToTop'
import Blogs from './components/Blogs'
import BlogDetails from './components/Blogs/BlogDetails'
import ContactUs from './components/ContactUs'



function App() {


  return (
    <>

      <BrowserRouter >
      <ScrollToTop/>
        <Header />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/ourservices" element={<OurServices/>} />
          <Route path="/workvisa" element={<WorkVisa/>} />
          <Route path="/touristvisa" element={<TouristVisa/>} />
          <Route path="/studentvisa" element={<StudentVisa/>} />
          <Route path="/businessvisa" element={<BusinessVisa/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/blogdetails" element={<BlogDetails/>} />
          <Route path="/contactus" element={<ContactUs/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
