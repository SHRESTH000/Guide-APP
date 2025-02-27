import React from 'react';
import img11 from "../assets/img11.jpg"; // Corrected import path

function Banner() {
  return (
    <> 
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 '>
        <br />
        <div className="w-full  order-2 md:order-1  md:w-1/2 mt-12 md:mb-6 ml-10" >
        <div className='space-y-6 mt-20 md:mt-10  mt-60 ' >
            <h1 className='text-4xl font-bold mt-20  '>Hello welcome here to know
                 <span className='text-pink-500'>ABout your Journey!!!</span>
                 </h1>
                 <br />
                 <p className='text-1xl'>lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ad quaerat incidunt sequi odio est sit neque quod ex! Voluptatem tenetur doloribus quis placeat et? Officiis rerum repudiandae ipsum, nostrum fugiat quas iusto nulla rem consequuntur necessitatibus! Molestias expedita eos vero ducimus, tempora officiis, illum excepturi repellendus sint, aspernatur rem?</p>
                 <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<button className="btn btn-active btn-secondary  ">Secondary</button>
                 </div>
        </div >
        <div className=" order-1 w-full md:w-1/2 md:ml-20 ml-0 md:w-92 h-2 md:mt-20 "><img src={img11} className="w-250 h-1800px mt-10 md:ml-10" alt="" /></div>
    </div>
    </>
  )
}

export default Banner;
