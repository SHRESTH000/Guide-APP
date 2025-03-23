import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

function Category() {
  const filterData = list.filter((data) => data.category === "free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Container for Heading */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 text-center md:text-left mt-10">
        <h1 className="font-bold text-2xl md:text-3xl pb-2">Know Our Services</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ab earum adipisci asperiores
          distinctio veritatis quod exercitationem repellendus quidem illo.
        </p>
      </div>

      {/* Slider Section */}
      <div className="slider-container mt- px-4 md:px-2">
        <Slider {...settings}>
          {filterData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </Slider>
      </div>


      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
<h1 className='font-bold text-3xl pb-2 text-center mt-12 mb-6 ' >Know Our Services</h1>
<p>
At <b>City Diary</b>, we offer a unique blend of services designed to enhance your travel and dining experiences. Whether you're exploring new destinations or seeking the perfect meal, our services are here to make your journey seamless and enjoyable.

<br></br><h1 className='text-xl font-bold '>1.Travel Planning & City Guides</h1> We provide curated travel guides for cities around the world, offering personalized recommendations for must-visit places, attractions, and local experiences. From cultural hotspots to hidden gems, our guides ensure you never miss out on the best of each destination.

<br></br><h1 className='text-xl font-bold '>2.Restaurant Discovery & Reservations</h1> Discover the finest restaurants and hidden food gems wherever you go. Our platform offers detailed reviews, menus, and real-time availability for making reservations. Whether you're craving local delicacies or international cuisine, we connect you to the best dining options tailored to your preferences.

<br></br><h1 className='text-xl font-bold mt-2'>3.Interactive Map & Navigation</h1> Our interactive maps make it easy to navigate cities and find your way to key attractions, restaurants, and other points of interest. With up-to-date, real-time data, you can efficiently plan your routes and explore the city with ease, making your travels smoother and more enjoyable.

<br></br><h1 className='text-xl font-bold mt-2'>4.Custom Itinerary Creation</h1> We help you build your perfect travel itinerary based on your interests, from sightseeing to dining. Our platform allows you to combine locations, attractions, and restaurants in one easy-to-follow plan, making your trip hassle-free.

<br></br><h1 className='text-xl font-bold mb-2'>5.Local Experience Recommendations</h1> Beyond just restaurants and attractions, we offer insider tips for experiencing cities like a local. Whether it's attending a local event or discovering a unique café, we ensure your travel experience is authentic and memorable.

Our services are designed to elevate both your travel and dining experiences, helping you explore new cities with ease while enjoying the best meals and attractions they have to offer.

</p>
<br></br>
<br></br>
<br></br>
<br></br>


    </div>
   
    <center><h1 className='font-bold text-3xl pb-2 '> Explore now....</h1> </center>
    </>
  );
}

export default Category;
