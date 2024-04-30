import React from "react";
import { FaStar } from "react-icons/fa";

const MyartandcraftSingle = ({ data }) => {
  const {
    image,
    item_name,
    subcategory_Name,
    description,
    price,
    rating,
    customization,
    processing_time,
    stock_status,
    user_email,
    user_name,
  } = data;
  return (
    <div>
      <div className="card h-full w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt={item_name} className="rounded-xl" />
        </figure>
        <div className="card-body  text-center">
          <div className="flex gap-4 justify-between">
            <div>
              <p>${price}</p>
            </div>
            <div>
              <p className="flex items-center gap-1">
                <FaStar />
                {rating}
              </p>
            </div>
          </div>
          <h2 className="card-title">{item_name}</h2>
          <p className="flex">Customization: {customization}</p>
          <p className="flex">Stock Status: {stock_status}</p>
          <div className="card-actions justify-between">
            <button className="btn  btn-accent">Update</button>
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyartandcraftSingle;
