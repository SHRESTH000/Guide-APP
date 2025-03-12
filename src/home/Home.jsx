import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
// import hotel1 from '../../public/hotel1.jpeg';
// import hotel1 from "../assets/hotel1.jpg";
import Category from '../component/Category'
import Contact from '../component/Contact'

function Home() {
  return (
    <>
     <Navbar/>
    <Banner/>
    <Category/>
    <Contact/>
    {/* <Footer/> */}
    </>
  )
}

export default Home