import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, json, useLoaderData } from "react-router-dom";

const AllartandCraft = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allItems, setallItems] = useState([]);
  // const allItems = useLoaderData();


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API fetching delay
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating 3 seconds delay

        // Fetch data from API
        const response = await fetch('https://art-craft-server-side-three.vercel.app/craftitems');
        const fetchedData = await response.json();
        
        // Minimum loading time of 5 seconds
        setTimeout(() => {
          setallItems(fetchedData);
          setIsLoading(false);
        }, 2000); // 5 seconds in milliseconds - 3000 for API delay + 2000 minimum loading time
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:5000/craftitems')
  //   .then((res) => res.json())
  //   .then((data)=> {
  //     setallItems(data)
  //     setIsLoading(false)
  //   })
  // },[])

  if (isLoading) {
    return (
      <div className="text-center my-20">
        <span className="loading  loading-spinner loading-lg"></span>
      </div>
    );
}

  return (
    <div className="max-w-6xl  mx-auto mt-4">
       <Helmet>
        <title>CraftiFY - All Art & Craft</title>
      </Helmet>
      <div className="text-center space-y-4">
        <h2 className="text-xl md:text-3xl font-bold">All Art & Crafts</h2>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Processing Time</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allItems.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>{item.item_name}</td>
                <td>${item.price}</td>
                <td>{item.rating}</td>
                <td>{item.stock_status}</td>
                <td>{item.processing_time}</td>
                <td>
                  <Link to={`/details/${item._id}`} className="btn btn-sm btn-accent text-white rounded-full">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllartandCraft;
