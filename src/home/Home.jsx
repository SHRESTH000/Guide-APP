import React from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import Footer from '../component/Footer';
import Category from '../component/Category';
import Contact from '../component/Contact';

import list from '../../public/list.json';
import hotel1 from "../../public/hotel1.jpg";
import school1 from "../../public/school1.jpeg";
import hospital1 from "../../public/hospital1.jpeg";
import map1 from "../../public/map1.jpeg";
import temple1 from "../../public/temple1.jpeg";
import railway1 from "../../public/railway1.jpeg";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      <div className="container mx-auto px-4 py-10">
        <section className="dark:bg-slate-900 dark:text-white">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card Component */}
            {[
              { image: hotel1, title: "Hotels", description: "Discover the best hotels in the city for your stay.", link: "/about" },
              { image: school1, title: "Schools", description: "Find top schools offering excellent education." },
              { image: hospital1, title: "Hospitals", description: "Get information about the best healthcare facilities.", link: "/hospital" },
              { image: temple1, title: "Temples", description: "Explore the city's beautiful temples.", link: "/temple" },
              { image: map1, title: "Map", description: "Use the interactive map to navigate the city." },
              { image: railway1, title: "Railways Network", description: "Find your way to popular spots." },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-center  mb-4">
                  <img src={item.image} alt={item.title} width="400px" height="100px" className="w-full h-48 object-cover rounded-lg " />
                </div>
                <h3 className="text-2xl font-medium text-gray-800 dark:text-white mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center dark:text-gray-300">{item.description}</p>
                {item.link && (
                  <div className="flex justify-center mt-4">
                    <a href={item.link} className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 p-3 border-2">Explore</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
