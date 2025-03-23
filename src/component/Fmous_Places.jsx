import React, { useEffect, useState } from "react";
import Card from "./Card";
import list4 from "../../public/list4.json";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getPlace } from "../services/PlaceService";

function Fmous_Places() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const stateId = localStorage.getItem("stateID");

  useEffect(() => {
    const fetchPlacesData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (stateId) {
          const response = await getPlace(stateId);
          if (response && response.data) {
            const transformedPlace = response.data.map((place) => ({
              name: place.name,
              des: place.description,
              link: `/place/${place.pId}`,
              category: "visting",
              image: "t1.jpeg",
            }));
            setPlaces(transformedPlace);
          } else {
            console.log("No Place found for this state.");
            toast.error("No place found for this state.");
            setPlaces([]);
          }
        } else {
          console.warn("stateID not found in localStorage.");
          toast.warn("State information is missing.");
          setPlaces([]);
        }
      } catch (error) {
        console.error("Error fetching Resturant:", error);
        setError("Failed to load Resturant data.");
        toast.error("Failed to load Resturant data.");
        setPlaces([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPlacesData();
  }, [stateId]);

  if(loading){
    return <p className="text-center">Loading Place data...</p>
  }
  if(error){
    return <p className="text-center text-red-500">Error :{error}</p>
  }

  return (
    <>
      <Navbar />
      <section className="py-10 px-4  text-center mt-10">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10 px-4  text-center ">
          <div className=" justify-center items-center text-center ">
            <h1 className=" text-2xl md:text-4xl">
              We're delighted to have you{" "}
              <span className="text-pink-500">Fomaous places Here..!</span>
            </h1>
            <p className="mt-8 md:ml-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              saepe alias consequatur ullam corrupti, labore ex. Odio voluptates
              ex quas tenetur iusto officia, deleniti sunt necessitatibus esse
              maxime eius cum alias, ad aut. Molestiae necessitatibus aliquid
              labore! Corrupti, impedit officia sapiente, expedita, rem nulla
              accusamus nisi voluptatem ipsum molestiae cum.
            </p>
            <Link to="/">
              <button className="bg-pink-500 text-white- px-4 py-2 mt-8 rounded-md hover:bg-pink-700 duration-300">
                Back
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
            {places.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Fmous_Places;
