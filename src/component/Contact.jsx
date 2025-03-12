import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import hotel1 from "../../public/hotel1.jpg";

// Correct Image Paths
import foodImg from "../../public/f3.jpeg";
import travelImg from "../../public/t3.jpeg";
import healthcareImg from "../../public/h3.jpeg";
import eventsImg from "../../public/f8.jpeg";

// Info Section Data
const infoData = [
  {
    id: 1,
    title: "Explore Food",
    description: "Discover the best restaurants, cafes, and street food in the city.",
    image: foodImg,
    link: "/resturant",
  },
  {
    id: 2,
    title: "Travel Guide",
    description: "Find the best travel destinations and experiences in your city.",
    image: travelImg,
    link: "/travel-guide",
  },
  {
    id: 3,
    title: "Healthcare Services",
    description: "Locate the best hospitals, clinics, and pharmacies nearby.",
    image: healthcareImg,
    link: "/hospital",
  },
  {
    id: 4,
    title: "Local Events",
    description: "Stay updated with the latest events  in your city.",
    image: eventsImg,
    link: "/local-events",
  },
];

const HeroSection = () => {
  return (
    <>
      <Navbar />

      {/* Container */}
      <div className="min-h-screen font-sans container mx-auto py-12">

        {/* Contact Information Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
            <p className="mt-4 text-gray-700 text-lg">
              Find information about hotels, railways, maps, and hospitals.
            </p>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
              {infoData.map((item) => (
                <Link to={item.link} key={item.id}>
                  <div className="p-6 bg-white shadow-lg rounded-lg text-center cursor-pointer transition transform hover:scale-105">
                    <img src={item.image} alt={item.title} className="w-full h-60 mx-auto rounded-lg object-cover" />
                    <h3 className="text-2xl font-semibold text-blue-500 mt-4">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section with Map */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h2>
              <form className="mt-8 space-y-6">
                <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
                <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg h-32"></textarea>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all">
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div>
              <img
                src="https://tse2.mm.bing.net/th?id=OIF.YfC0Rk8gPBait334ySdXRQ&pid=Api&P=0&h=180"
                alt="Google Map"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default HeroSection;
