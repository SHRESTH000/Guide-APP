import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Navbar from "./Navbar";
import Footer from "./Footer";
import searchplace from "../../public/data/searchplace.json";
import { motion } from "framer-motion";

// import { Hospital } from "./Hospital";

const containerStyle = {
  width: "100%",
//   height:px",
};

const center = {
  lat: 27.1751,
  lng: 78.0421,
};

const statesList = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal", "Delhi"
];

const FamousPlaces = () => {
  const [places, setPlaces] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY", // Replace with your actual API Key
  });

  useEffect(() => {
    setLoading(true);
    fetch("/data/searchplace.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPlaces(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const fetchPlaces = () => {
    if (!searchQuery) return;
    const results = places.filter((place) =>
      place.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPlaces(results);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      const filteredStates = statesList.filter((state) =>
        state.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredStates);
    } else {
      setSuggestions([]);
    }
  };
  // Handle selecting a suggestion
  const handleSuggestionClick = (state) => {
    setSearchQuery(state);
    setSuggestions([]);
  };

  if (loading) return <p className="text-center text-blue-500 text-xl font-bold">Loading...</p>;
  if (error) return <p className="text-center text-red-500 text-xl font-bold">Error: {error}</p>;

  return (
    <>
      <Navbar fixed={true} />
      
      <div className="container mx-auto p-8  ">
        <motion.h1 
          className="text-2xl mt-12  text-dark font-bold text-center mb-8" 
          
        >
          🌍 Explore Famous Places 🌍
        </motion.h1>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search for a place..."
            className="p-4 rounded-lg w-2/3 md:w-1/3 text-black border border-gray-300"
            value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            onChange={handleInputChange}
          />
          <motion.button
            className="ml-2 px-6 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800"
            onClick={fetchPlaces}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Search
          </motion.button>

          {suggestions.length > 0 && (
            <ul className="absolute mt-16  sch-sgs  left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg w-2/3 md:w-1/3 shadow-lg">
              {suggestions.map((state, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(state)}
                >
                  {state}
                </li>
              ))}
            </ul>
          )}
        </div>

        {filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPlaces.map((place, index) => (
              <motion.div 
                key={index} 
                className="bg-white text-black p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-gray-100"
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate(`/src/component/${Hospital}`)}
              >
                <img src={place.image} alt={place.location} className="w-full h-48 object-cover rounded-md mb-4" />
                <h2 className="text-2xl font-semibold text-blue-700">{place.name}</h2>
                <p className="mt-2 text-gray-700">{place.description}</p>
                <p className="mt-2 text-gray-700">{place.link}</p>
                {/* <p className="mt-1 text-sm text-gray-500 font-semibold">📍 {place.location}</p> */}
              </motion.div>
            ))}
          </div>
        ) : (
            
          <p className="text-center text-xl font-bold">Search for a place to see results</p>
        )}

        {isLoaded && (
          <div className="mt-10">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
          </div>
        )}
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-10 px-4  text-center'>
                <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here..!</span></h1>
           <p className='mt-8 md:ml-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe alias consequatur ullam corrupti, labore ex. Odio voluptates ex quas tenetur iusto officia, deleniti sunt necessitatibus esse maxime eius cum alias, ad aut. Molestiae necessitatibus aliquid labore! Corrupti, impedit officia sapiente, expedita, rem nulla accusamus nisi voluptatem ipsum molestiae cum.</p>
           {/* <Link to="/"><button className='bg-pink-500 text-white- px-4 py-2 mt-8 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link> */}
           
            </div>
      
    <div className="container mx-auto p-6">
      {/* Map and About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Map Image */}
        <div>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.qcymxIoNyCxUbF-lqzBWrgHaFL&pid=Api&P=0&h=180"
            alt="Map"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* About & Details */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Discover the World with Us</h2>
          <p className="text-gray-600 mb-4">
            Explore breathtaking locations, uncover hidden gems, and create
            unforgettable memories. Our travel experiences are designed to
            inspire and excite every adventurer.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Curated travel itineraries</li>
            <li>Expert local guides</li>
            <li>Unmatched adventure experiences</li>
            <li>Safe and secure bookings</li>
          </ul>
          <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.utpflpyqZU_0jykJ0xaZBAHaFA&pid=Api&P=0&h=180"
          alt="Travel 1"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.5gMg0hiad8s5fErxq9SKPgHaFj&pid=Api&P=0&h=180"
          alt="Travel 2"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.L2C43-wv7BqtmOLmUVrYMQHaEA&pid=Api&P=0&h=180"
          alt="Travel 3"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.FpzdmtNnULlxEZLjSTrWKgHaFj&pid=Api&P=0&h=180"
          alt="Travel 4"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
      </div>
      <Footer />
    </>
  );
};

export default FamousPlaces;
