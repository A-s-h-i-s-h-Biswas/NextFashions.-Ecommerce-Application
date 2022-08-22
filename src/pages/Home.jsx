import React from 'react'
import Navbar from '../components/Navbar';
import Anouncement from '../components/Anouncement';
import Sliders from '../components/Sliders';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
        <Anouncement/>
        <Navbar/>
        <Sliders/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home;

