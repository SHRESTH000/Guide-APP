import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Navbar from "./Navbar";
import Footer from "./Footer";
import searchplace from "../../public/data/searchplace.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getState } from "../services/StateService"; 
import toast from "react-hot-toast";

const containerStyle = {
  width: "100%",
};

const center = {
  lat: 27.1751,
  lng: 78.0421,
};

const statesList = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Mumbai",
];

const FamousPlaces = () => {
  const [places, setPlaces] = useState([]);
  const [stateValue, setStateValue] = useState({
    description: "",
    id: "",
    latitude: "",
    longitude: "",
    name: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loadingPlaces, setLoadingPlaces] = useState(false);
  const [errorPlaces, setErrorPlaces] = useState(null);
  const [selectedStateDetails, setSelectedStateDetails] = useState({
    name: "",
    id:"",
    description:"",
  }); // New state for state details
  const [loadingStateDetails, setLoadingStateDetails] = useState(false); // Loading state for state details
  const [errorStateDetails, setErrorStateDetails] = useState(null); // Error state for state details

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY", // Replace with your actual API Key
  });

  useEffect(() => {
    setLoadingPlaces(true);
    fetch("/data/searchplace.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPlaces(data);
        setLoadingPlaces(false);
      })
      .catch((error) => {
        setErrorPlaces(error.message);
        setLoadingPlaces(false);
      });
  }, []);

  const fetchPlaces = () => {
    if (!searchQuery) return;
    const matchedState = statesList.find(
      (state) => state.toLowerCase() === searchQuery.toLowerCase()
    );
    if (matchedState) {
      handleSuggestionClick(matchedState);
      //return; // Stop fetching places if a state is found
    }
    const results = places.filter((place) =>
      place.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPlaces(results);
    setSelectedStateDetails(null); // Clear state details when searching places
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSelectedStateDetails(null); // Clear state details when input changes
    if (query) {
      const filteredStates = statesList.filter((state) =>
        state.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredStates);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = async (state) => {
    setSearchQuery(state);
    setSuggestions([]);
    setFilteredPlaces([]); // Clear places when a state is selected

    setLoadingStateDetails(true);
    setErrorStateDetails(null);
    try {
      const data = await getState(state);
      console.log(data);
      if (data) {
        localStorage.setItem("stateID", data.data.id);
        setStateValue(data);
        //console.log(localStorage.getItem("stateID"));
      } else {
        toast.error("error");
      }
      setSelectedStateDetails(data.data);
    } catch (err) {
      setErrorStateDetails("Failed to fetch details for " + state);
      console.error(err);
    } finally {
      setLoadingStateDetails(false);
    }
  };

  if (loadingPlaces)
    return (
      <p className="text-center text-blue-500 text-xl font-bold">
        Loading places...
      </p>
    );
  if (errorPlaces)
    return (
      <p className="text-center text-red-500 text-xl font-bold">
        Error loading places: {errorPlaces}
      </p>
    );
  if (loadingStateDetails)
    return (
      <p className="text-center text-blue-500 text-xl font-bold">
        Loading state details...
      </p>
    );
  if (errorStateDetails)
    return (
      <p className="text-center text-red-500 text-xl font-bold">
        Error loading state details: {errorStateDetails}
      </p>
    );

  return (
    <>
      <Navbar fixed={true} />

      <div className="container mx-auto p-8 ">
        <motion.h1 className="text-2xl mt-12  text-dark font-bold text-center mb-8">
          🌍 Explore Famous Places 🌍
        </motion.h1>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search for a place or state..."
            className="p-4 rounded-lg w-2/3 md:w-1/3 text-black border border-gray-300"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <motion.button
            className="ml-2 px-6 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800"
            onClick={fetchPlaces}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Search Places
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

        {selectedStateDetails && (
          <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              State Details: {selectedStateDetails.name}
              <p>{selectedStateDetails.description}</p>
            </h2>
            {/* Render the details you get back from your API */}
            {selectedStateDetails.capital && (
              <p>Capital: {selectedStateDetails.capital}</p>
            )}
            {selectedStateDetails.population && (
              <p>Population: {selectedStateDetails.population}</p>
            )}
            {/* Add more details as needed based on your backend response */}
          </div>
        )}

        {filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPlaces.map((place, index) => (
              <Link to={place.link} key={index}>
                <img
                  src={place.image}
                  alt={place.location}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-semibold text-blue-700">
                  {place.name}
                </h2>
                <p className="mt-2 text-gray-700">{place.description}</p>
              </Link>
            ))}
          </div>
        ) : (
          !loadingStateDetails &&
          !errorStateDetails &&
          !selectedStateDetails && (
            <p className="text-center text-xl font-bold">
              Search for a place or select a state to see results
            </p>
          )
        )}

        {isLoaded && (
          <div className="mt-10">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            />
          </div>
        )}
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10 px-4  text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here..!</span>
          </h1>
          <p className="mt-8 md:ml-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            saepe alias consequatur ullam corrupti, labore ex. Odio voluptates
            ex quas tenetur iusto officia, deleniti sunt necessitatibus esse
            maxime eius cum alias, ad aut. Molestiae necessitatibus aliquid
            labore! Corrupti, impedit officia sapiente, expedita, rem nulla
            accusamus nisi voluptatem ipsum molestiae cum.
          </p>
        </div>

        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.qcymxIoNyCxUbF-lqzBWrgHaFL&pid=Api&P=0&h=180"
                alt="Map"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Discover the World with Us
              </h2>
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
