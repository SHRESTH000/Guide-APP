import React from "react";
import {Link} from "react-router-dom"
import Footer from './Footer';
import Navbar from './Navbar';

    // const HeroSection = () => {

    const infoData = [
  {
    id: 1,
    title: "Explore Food",
    description: "Discover the best restaurants, cafes, and street food in the city.",
    image: "public/f3.jpeg",
  },
  {
    id: 2,
    title: "Travel Guide",
    description: "Find the best travel destinations and experiences in your city.",
    image: "public/t3.jpeg",
  },
  {
    id: 3,
    title: "Healthcare Services",
    description: "Locate the best hospitals, clinics, and pharmacies nearby.",
    image: "public/h3.jpeg",
  },
  {
    id: 4,
    title: "Local Events",
    description: "Stay updated with the latest events and activities happening in your city.",
    image: "public/f8.jpeg",
  },
];

const HeroSection = () => {
  return (

    <>
    <Navbar/>
    <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24 mt-10">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Welcome to City Diary</h1>
          <p className="text-lg text-gray-600 mt-4">
            Your ultimate guide to exploring food, travel, healthcare, and local events in the city.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
            Explore Now
          </button>
        </div>
        <div className="mt-8 md:mt-0 ml-10">
          <img
            src="public/hotel1.jpg"
            alt="City Diary Hero"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Information Map Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {infoData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg"
          >
            <img src={item.image} alt={item.title} className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  
  <Footer/>

</>
  )
};
export default HeroSection;
