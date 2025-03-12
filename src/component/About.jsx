import React from 'react';
import hotel1 from "../../public/hotel1.jpg"
import school1 from "../../public/school1.jpeg"
import hospital1 from "../../public/hospital1.jpeg"
import map1 from "../../public/map1.jpeg"
import temple1 from "../../public/temple1.jpeg"
import railway1 from "../../public/railway1.jpeg"
import {Link} from "react-router-dom"
import Footer from './Footer';
import Navbar from './Navbar';
// import About from './About';

const CityDirectoryAbout = () => {
  return (
    <>
    <Navbar/>


    
   <section className="py-10 px-4 bg-gray-50 text-center mt-20">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to City Directory</h2>
        <p className="text-lg text-gray-600">
          Your comprehensive guide to hotels, schools, hospitals, temples, and more in the city.
        </p>
      </div>
      <p className='mt-8 md:ml-12 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe alias consequatur ullam corrupti, labore ex. Odio voluptates ex quas tenetur iusto officia, deleniti sunt necessitatibus esse maxime eius cum alias, ad aut. Molestiae necessitatibus aliquid labore! Corrupti, impedit officia sapiente, expedita, rem nulla accusamus nisi voluptatem ipsum molestiae cum.</p>


      <section className="py-16 bg-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800">About City Diary</h2>
            <p className="mt-4 text-gray-700 text-lg">
              City Diary is your go-to platform for exploring city details, including hotels, railways, maps, and hospitals. 
              Our mission is to provide accurate and easy-to-access information to make your city experience smooth and hassle-free.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Whether you're a traveler looking for the best accommodations or a resident seeking essential city services, 
              City Diary is here to guide you. We strive to offer updated information on locations, reviews, and facilities 
              to help you make informed decisions.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Our mission is to create a seamless urban experience by offering real-time and reliable data about city life. 
              We aim to bridge the gap between citizens and essential services, making navigation and decision-making easier. 
              Through our platform, we aspire to enhance connectivity and accessibility, ensuring that users can find what 
              they need quickly and effortlessly.
            </p>
          </div>
        </section>
      <Link to="/"><button className='bg-pink-500 text-white- px-4 py-2 m-10 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Hotels Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-orange-500 text-4xl mb-4">
            {/* <i className="fas fa-hotel"></i> */}
            <img src={hotel1} alt="" />
          </div>
          <h3 className="text-2xl font-medium text-gray-800 mb-2">Hotels</h3>
          <p className="text-gray-600">
            Discover the best hotels in the city for your stay. From luxurious resorts to budget-friendly accommodations,
            we have you covered.
          </p>
        </div>

        {/* Schools Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-2xl transition-all duration-300 pointer-cursor">
          <div className="text-orange-500 text-4xl mb-4">
            {/* <i className="fas fa-school"></i> */}
            <img src={school1} alt="" /></div>
          <h3 className="text-2xl font-medium text-gray-800 mb-2">Schools</h3>
          <p className="text-gray-600">
            Find top schools offering excellent education, ranging from primary schools to prestigious universities.
          </p>
        </div>

        {/* Hospitals Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-orange-500 text-4xl mb-4">
            {/* <i className="fas fa-hospital"></i> */}
              <a href="/hospital"><img className='  ml-10 md:ml-0' src={hospital1} alt="" /></a></div>
          <h3 className="text-2xl font-medium text-gray-800 mb-2">Hospitals</h3>
          <p className="text-gray-600">
            Get information about the best healthcare facilities, emergency services, and specialist clinics available in the city.
          </p>
        </div>

        {/* Temples Section */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="text-orange-500 text-4xl mb-4">
            {/* <i className="fas fa-pagelines"></i> */}
            <a href="/temple">  <img  className=" ml-20  md:ml-10 " src={temple1} alt="" /></a></div>
          <h3 className="text-2xl font-medium text-gray-800 mb-2">Temples</h3>
          <p className="text-gray-600">
            Explore the city's beautiful temples, where spirituality and culture meet. Visit sacred places and learn about the city's rich heritage.
          </p>
        </div>

        {/* Map Section */}
        <div className="bg-white p-9 rounded-lg shadow-lg">
          <div className="text-orange-500 text-4xl mb-4">
            <i className="fas fa-map-marker-alt"></i>
            <img className="  ml-20 md:ml-20 " src={map1} alt="" />
          </div>
          <h3 className="text-2xl font-medium text-gray-800 mb-2">Map</h3>
          <p className="text-gray-600">
            Use the interactive map to navigate the city. Find your way to popular spots, get directions, and explore local attractions.
          </p>
        </div>
      {/* railway */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-orange-500 text-4xl mb-4">
            {/* <i className="fas fa-map-marker-alt"></i> */}
            <img  src={railway1} alt="" />
          </div>
          <h3 className="text-2xl font-medium text-gray-800 mb-2">Map</h3>
          <p className="text-gray-600">
            Use the interactive map to navigate the city. Find your way to popular spots, get directions, and explore local attractions.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800">About City Diary</h2>
            <p className="mt-4 text-gray-700 text-lg">
              City Diary is your go-to platform for exploring city details, including hotels, railways, maps, and hospitals. 
              Our mission is to provide accurate and easy-to-access information to make your city experience smooth and hassle-free.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Whether you're a traveler looking for the best accommodations or a resident seeking essential city services, 
              City Diary is here to guide you. We strive to offer updated information on locations, reviews, and facilities 
              to help you make informed decisions.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Our mission is to create a seamless urban experience by offering real-time and reliable data about city life. 
              We aim to bridge the gap between citizens and essential services, making navigation and decision-making easier. 
              Through our platform, we aspire to enhance connectivity and accessibility, ensuring that users can find what 
              they need quickly and effortlessly.
            </p>
          </div>
        </section>

    <Footer/>
    </>
  );
};

export default CityDirectoryAbout;
