import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item }) {
  return (
    <div className="p-4 flex justify-center">
      <div className="card bg-base-100 w-full sm:w-100 md:w-90 shadow-xl hover:scale-105 transition-transform duration-300 dark:bg-slate-900 dark:text-white">
        
        {/* Clickable Image (Navigates to item.link) */}
        <Link to={item.link}>
          <figure className="px-4 pt-4 cursor-pointer">
            <img
              className="w-full h-auto max-h-80 object-cover rounded-md"
              src={item.image}
              alt={item.name}
            />
          </figure>
        </Link>

        {/* Card Content */}
        <div className="card-body text-center">
          <h2 className="card-title text-lg sm:text-xl flex flex-col sm:flex-row justify-center items-center gap-2">
            {item.name}
            {/* <div className="badge badge-secondary">{item.category}</div> */}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            {item.des}
          </p>

          {/* Card Actions */}
          {/* <div className="card-actions flex justify-center gap-3 mt-3">
            <div className="badge badge-outline text-xs sm:text-sm px-3 py-1">
              Fashion
            </div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white transition duration-200 cursor-pointer px-4 py-2 border-[2px] text-xs sm:text-sm">
              Check Now
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
