import React from "react";

import { Link } from "react-router-dom";

const CategoryData = ({ data }) => {
  const { image, category, desc } = data;

  return (
    <div>
      
      <div className="card h-full w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <p>{desc}</p>
          <div className="card-actions justify-end">
            <Link to={`/categorysinglepage/${category}`} className="btn text-white btn-md btn-accent">See All</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryData;
