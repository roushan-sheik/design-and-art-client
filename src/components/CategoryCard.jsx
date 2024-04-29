import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { Link, useParams } from "react-router-dom";

const CategoryCard = () => {
  const { category } = useParams();

  const [paints, setPaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setPaints(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen">
      {loading ? (
        <div className="h-[calc(100vh-100px)] flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paints.map((painting) => {
            if (painting.category === category) {
              return (
                <div key={painting._id}>
                  <div className="">
                    <div className="  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                      <img
                        src={painting.photo}
                        alt="coming sonn...."
                        className="object-cover h-96 object-center w-full rounded-t-md dark:bg-gray-500"
                      />
                      <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                          <span>{painting.subcategory}</span>
                          <h2 className="text-3xl font-semibold tracking-wide">
                            {category}
                          </h2>
                          <p className="dark:text-gray-800">
                            {painting.description.slice(0, 500)}
                          </p>
                        </div>
                        <div className=" space-y-2">
                          <div>
                            <strong>processing Time</strong> : {painting.time}
                          </div>
                          <p className="flex items-center gap-2">
                            <strong>Rating :</strong> {painting.rating}{" "}
                            <FaStar />
                          </p>

                          <div className="flex items-center gap-2">
                            <GrMoney /> <strong>Price</strong>: {painting.price}
                          </div>
                        </div>
                        <Link
                          to={`categoryDetails/${painting._id}`}
                          className="btn text-xl bg-[#f7a73e] text-white hover:bg-transparent hover:text-[#f7a73e] hover:border-[#f7a73e]"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
