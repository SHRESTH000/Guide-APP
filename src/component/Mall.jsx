import React from 'react'
import Card from './Card'
import mall from "../../public/data/mall.json"
import {Link} from "react-router-dom"
import Navbar from './Navbar'
import Footer from './Footer'

function Place() {
  return (
    <>
    <Navbar/>
    <section className='py-10 px-4  text-center mt-10'>

      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-10 px-4  text-center'>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here..!</span></h1>
   <p className='mt-8 md:ml-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe alias consequatur ullam corrupti, labore ex. Odio voluptates ex quas tenetur iusto officia, deleniti sunt necessitatibus esse maxime eius cum alias, ad aut. Molestiae necessitatibus aliquid labore! Corrupti, impedit officia sapiente, expedita, rem nulla accusamus nisi voluptatem ipsum molestiae cum.</p>
   <Link to="/"><button className='bg-pink-500 text-white- px-4 py-2 mt-8 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
   
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-2'>
{
  mall.map((item)=>(
    <Card key={item.id} item={item}/>
  ))
}

    </div>
    
 
    

  
    </section>

    <Footer/>
    </>
  
  
  )
}

export default Place