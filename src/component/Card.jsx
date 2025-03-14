import React from 'react'
// import img1 from "../../public/img1.png"

function Card({item}) {
  return (
    <>
    <div className='mt-4 my-3 p-3'> 
    <div className="card bg-base-100 w-92 shadow-xl mt-10 ml-10 hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white ">
  <figure>
    <img className='mb-4 ml-8'
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 cursor-pointer p-3 border-[2px]">Check Now</div>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default Card