import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="max-2-6xl text-center mx-auto px-4">
      <div className="flex mt-12 w-full">
        <div className="grid h-20 flex-grow card bg-red-200 rounded-box place-items-center">
          
        </div>
        <div className=" divider-horizontal font-bold rounded-full bg-red-600"></div>
        <div className="grid h-20 flex-grow card bg-red-200 rounded-box place-items-center">
          
        </div>
        
      </div>
      <h2 className="text-3xl mt-10 lg:text-6xl font-bold text-red-500">404</h2>
      <h2 className="text-4xl mt-10 lg:text-7xl font-bold text-red-500">Page Not Found</h2>
      <p className="text-lg my-6 lg:text-3xl font-medium text-gray-400">Sorry, we couldn't find the page.</p>
      <Link to={"/"} className="btn bg-[#0077be] text-white hover:text-black">Go to Home</Link>
    </div>
  );
};

export default ErrorPage;