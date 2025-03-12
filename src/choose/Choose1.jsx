import React from 'react'
import Navbar from '../component/Navbar'
import Place from '../component/Hospital'
import Footer from '../component/Footer'
import Temple from '../component/Map'
import About from '../component/About'
import Hospital from '../component/Hospital'


function Choose1() {
  return (
    <>

    <Navbar/>
   <div className='min-h-screen'>
    
    <Hospital/>
    
    {/* <About/> */}

   </div>
    <Footer/>
    </>
  )
}

export default Choose1