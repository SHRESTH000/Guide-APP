import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
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