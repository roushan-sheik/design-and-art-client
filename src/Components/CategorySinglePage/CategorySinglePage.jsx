import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const CategorySinglePage = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  console.log(category);

  useEffect(() => {
    fetch(`https://art-craft-server-side-three.vercel.app/categoryItems/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto">
       <Helmet>
        <title>CraftiFY - Art & Craft Category</title>
      </Helmet>
      <div className="text-center space-y-4">
        <h2 className="text-xl md:text-3xl font-bold">
          Art & Craft Single Category
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {category.map((data) => (
          <div
            key={data._id}
            className="card h-full w-full bg-base-100 shadow-xl"
          >
            <figure className="px-10 pt-10">
              <img
                src={data.image}
                alt={data.item_name}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body  text-center">
              <div className="flex gap-4 justify-between">
                <div>
                  <p>${data.price}</p>
                </div>
                <div>
                  <p className="flex items-center gap-1">
                    <FaStar />
                    {data.rating}
                  </p>
                </div>
              </div>
              <h2 className="card-title">{data.item_name}</h2>
              <p className="flex">{data.subcategory_Name}</p>
              <p className="text-left">{data.description.slice(0, 100)}</p>
              <p className="flex">Customization: {data.customization}</p>
              <p className="flex">Stock Status: {data.stock_status}</p>
              <p className="text-left">
                Processing Time: {data.processing_time}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/details/${data._id}`} className="btn  btn-accent">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySinglePage;
