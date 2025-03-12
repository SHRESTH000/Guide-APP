import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MapSearchPage = () => {
  const mapRef = useRef(null);
  const inputRef = useRef(null);
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    const loadGoogleMapsScript = (callback) => {
      if (window.google) {
        callback();
        return;
      }
      const script = document.createElement("script");
      script.src = `https://maps.gomaps.pro/maps/api/js?key=AlzaSyZcGorqQGs-vT5S4x59i0GGeJ0slm0DkGn&libraries=geometry,places&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = callback;
      document.body.appendChild(script);
    };

    loadGoogleMapsScript(() => {
      const mapInstance = new google.maps.Map(mapRef.current, {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
      });
      setMap(mapInstance);
const autocompleteInstance = new google.maps.places.Autocomplete(inputRef.current);
      autocompleteInstance.bindTo("bounds", mapInstance);
      setAutocomplete(autocompleteInstance);
autocompleteInstance.addListener("place_changed", () => {
        const place = autocompleteInstance.getPlace();
        if (!place.geometry) return;

        if (place.geometry.viewport) {
          mapInstance.fitBounds(place.geometry.viewport);
        } else {
          mapInstance.setCenter(place.geometry.location);
          mapInstance.setZoom(17);
        }
       new google.maps.Marker({
          position: place.geometry.location,
          map: mapInstance,
        });
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-20 p-6">
       <div className="flex items-center border border-gray-300 rounded-lg p-3 mb-4 shadow-md w-full max-w-lg mx-auto">
          <FaSearch className="text-gray-500 mx-2" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for a place"
            className="w-full p-2 outline-none"
          />
        </div>
        <div
          ref={mapRef}
          className="w-full h-[400px] border rounded-lg shadow-lg mb-6"
        ></div>
        <h2 className="text-2xl font-bold mb-4">Featured Locations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Sydney Opera House", img: "https://tse1.mm.bing.net/th?id=OIP.ACOFB04uN1FyaPgwz9W7ZQHaDV&pid=Api&P=0&h=180" },
            { title: "Famous Beach", img: "https://tse2.mm.bing.net/th?id=OIP.JhO5Jpda9yLAb_C58kYA-wHaFj&pid=Api&P=0&h=180" },
            { title: "Downtown City", img: "https://tse1.mm.bing.net/th?id=OIP.V_kLzgqGlowsMKRjvWOvFAHaEK&pid=Api&P=0&h=180" },
            { title: "Downtown City", img: "https://tse1.mm.bing.net/th?id=OIP.V_kLzgqGlowsMKRjvWOvFAHaEK&pid=Api&P=0&h=180" },
            { title: "Downtown City", img: "https://tse1.mm.bing.net/th?id=OIP.V_kLzgqGlowsMKRjvWOvFAHaEK&pid=Api&P=0&h=180" },
            { title: "Downtown City", img: "https://tse1.mm.bing.net/th?id=OIP.V_kLzgqGlowsMKRjvWOvFAHaEK&pid=Api&P=0&h=180" },
          ].map((place, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img src={place.img} alt={place.title} className="rounded-md w-full h-40 object-cover" />
              <h3 className="text-lg font-semibold mt-2">{place.title}</h3>
              <p className="text-sm text-gray-600">A beautiful place to visit.</p>
            </div>
          ))}
        </div>
       <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-bold mb-2">Explore the City with Ease</h2>
          <p className="text-gray-700">
            Use the interactive map above to find key locations such as hotels, hospitals, railways, and more.
            Simply type in the name of a place in the search bar to get instant results and directions.
            Whether you're planning a trip or looking for essential services, our map tool makes navigation effortless.
          </p>
        </div>
      </div>
<Footer />
    </>
  );
};

export default MapSearchPage;
