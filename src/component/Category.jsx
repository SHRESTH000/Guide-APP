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
    </>
  );
}

export default Category;
