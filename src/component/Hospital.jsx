import React, { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";
import toast from "react-hot-toast";
import { getHospital } from "../services/HospitalService";

function Place() {
  const [hospitalValue, setHospitalValue] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const stateId = localStorage.getItem("stateID");
  useEffect(() => {
    const fetchHospitalData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (stateId) {
          const response = await getHospital(stateId);
          console.log(response);
          console.log(response.data);
          if (response && response.data) {
            const transformedHospitals = response.data.map(hospital => ({
              name: hospital.name,
              des: hospital.description,
              link: `/hospital/${hospital.hId}`,
              category: 'Healthcare',
              image: '/h1.jpeg',
            }));
            setHospitals(transformedHospitals);
          } else {
            console.log("No hospital found for this state.");
            toast.error("No hospital found for this state.");
            setHospitals([]);
          }
        } else {
          console.warn("stateID not found in localStorage.");
          toast.warn("State information is missing.");
          setHospitals([]);
        }
      } catch (error) {
        console.error("Error fetching hospital:", error);
        setError("Failed to load hospital data.");
        toast.error("Failed to load hospital data.");
        setHospitals([]);
      } finally {
        setLoading(false);
      }
    };
    fetchHospitalData();
  }, [stateId]);

  if (loading) {
    return <p className="text-center">Loading hospital data...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <>
      <Navbar />

      <section className="py-10 px-4 text-center mt-10">
        <div className="max-w-screen-xl container mx-auto md:px-20 px-4 py-10 text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here..!</span>
          </h1>
          <p className="mt-8 md:ml-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            saepe alias consequatur ullam corrupti.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {hospitals.map((item) => {
            return (
              <Card key={item.link} item={item} />
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Place;
