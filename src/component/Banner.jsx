import React from "react";
import img11 from "../assets/img11.jpg"; // Ensure correct image path

function Banner() {
  return (
    <>
      {/* Added navbar gap */}
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col-reverse md:flex-row items-center mt-28">
        
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mt-10 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Hello! Welcome here to know{" "}
            <span className="text-pink-500">About your Journey!!!</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
            quaerat incidunt sequi odio est sit neque quod ex! Voluptatem
            tenetur doloribus quis placeat et? Officiis rerum repudiandae
            ipsum, nostrum fugiat quas iusto nulla rem consequuntur
            necessitatibus!
          </p>

          {/* Input Field and Button */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <label className="input input-bordered flex items-center gap-2 w-full md:w-2/3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow outline-none bg-transparent"
                placeholder="Enter your email"
              />
            </label>

            {/* Button */}
            <button className="btn btn-secondary w-full md:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={img11}
            className="w-full md:w-[450px] h-auto object-cover rounded-lg shadow-lg"
            alt="Journey"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
