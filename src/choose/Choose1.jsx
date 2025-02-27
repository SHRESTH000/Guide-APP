import React from 'react'
import Navbar from '../component/Navbar'
import Place from '../component/Place'
import Footer from '../component/Footer'
import Temple from '../component/Temple'
import About from '../component/About'


function Choose1() {
  return (
    <>

    <Navbar/>
   <div className='min-h-screen'>
    
    <Place/>
    
    {/* <About/> */}

   </div>
    <Footer/>
    </>
  )
}

export default Choose1