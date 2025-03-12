import React from 'react'
import Card from './Card'
import list1 from "../../public/list1.json"
import {Link} from "react-router-dom"

function Place() {
  return (
    <>
    
    <section className='py-10 px-4  text-center mt-10'>

      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-10 px-4  text-center'>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here..!</span></h1>
   <p className='mt-8 md:ml-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe alias consequatur ullam corrupti, labore ex. Odio voluptates ex quas tenetur iusto officia, deleniti sunt necessitatibus esse maxime eius cum alias, ad aut. Molestiae necessitatibus aliquid labore! Corrupti, impedit officia sapiente, expedita, rem nulla accusamus nisi voluptatem ipsum molestiae cum.</p>
   <Link to="/"><button className='bg-pink-500 text-white- px-4 py-2 mt-8 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
   
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-2'>
{
  list1.map((item)=>(
    <Card key={item.id} item={item}/>
  ))
}

    </div>
    
 
    

    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full bg-blue-900 text-white text-center py-16 px-4 md:px-12">
        <h1 className="text-4xl font-bold">Affordable Care</h1>
        <p className="max-w-3xl mx-auto mt-4">
          Navigating health care plans, Medicaid, and even private or traditional insurance options can feel overwhelming.
          At One Community Health, we simplify this process to make it stress-free for you.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
            Schedule Now
          </button>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold">
            Learn More
          </button>
        </div>
      </div>

      {/* News & Events Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">News & Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* News Section */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Latest News</h3>
            <p className="text-gray-600">
              Stay updated with the latest news, Medicaid changes, and community updates.
            </p>
            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg">
              Read More
            </button>
          </div>

          {/* Group Fitness Section */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Group Fitness</h3>
            <p className="text-gray-600">
              Join our free group exercise classes and stay active with One Community Health.
            </p>
            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg">
              Learn More
            </button>
            <div className="mt-4">
              <iframe
                className="w-full rounded-lg shadow-md"
                height="200"
                src="https://www.youtube.com/embed/your-video-id"
                title="Group Exercise Classes"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full">
      {/* Medicaid Help Section */}
      <div className="bg-gray-700 text-white px-10 py-16">
        <h2 className="text-4xl font-bold text-orange-400">Medicaid questions? <span className="text-white">We can help.</span></h2>
        <p className="mt-4 text-lg max-w-3xl">
          Navigating health care plans, Medicaid, and even private or traditional insurance options can feel very
          overwhelming and confusing. At One Community Health, we specialize in simplifying this process and making it
          as stress-free as possible for you.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-400 text-white font-semibold rounded-full shadow-lg hover:bg-green-500">
          LEARN MORE
        </button>
      </div>

      {/* News Section */}
      <div className="px-10 py-16 bg-white">
        <h2 className="text-4xl font-bold text-orange-500">News</h2>
        <div className="mt-6 flex space-x-6 overflow-x-auto">
          {[1, 2, 3, 4 ,5 ,6].map((item) => (
            <div key={item} className="w-60 h-40 bg-gray-200 rounded-lg shadow-md"></div>
          ))}
        </div>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600">
          CLICK HERE FOR ALL NEWS STORIES
        </button>
      </div>
    </div>
    </section>
    </>
  
  
  )
}

export default Place