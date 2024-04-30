import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { IoIosArrowDown } from "react-icons/io";

import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyartandCraft = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [customize, setCustomize] = useState([]);
  const [control, setControl] = useState(false);

  const handleCustomization = filter => {
    if(filter === 'all'){
      setCustomize(items);
    }
    else if (filter === 'yes'){
      const customizable = items.filter(data => data.customization === 'yes');
      setCustomize(customizable);
    }
    else if(filter === 'no'){
      const nocustomizable = items.filter(data => data.customization === 'no');
      setCustomize(nocustomizable);
    }
  }

  useEffect(() => {
    fetch(`https://art-craft-server-side-three.vercel.app/mylistitems/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setCustomize(data);
      });
  }, [user, control]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to get back this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://art-craft-server-side-three.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              setControl(!control);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>CraftiFY - My Art & Craft</title>
      </Helmet>
      <div className="text-center space-y-4">
        <h2 className="text-xl md:text-3xl font-bold">My Art & Craft List</h2>
      </div>
      <div className="text-center my-6">
        <div className="dropdown btn-accent ">
          <div tabIndex={0} role="button" className="btn text-white m-1">
            Customization <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleCustomization('all')}>
              <a>All</a>
            </li>
            <li onClick={() => handleCustomization('yes')}>
              <a>Yes</a>
            </li>
            <li onClick={()=> handleCustomization('no')}>
              <a>No</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {customize.map((data) => (
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
              <p className="flex">Customization: {data.customization}</p>
              <p className="flex">Stock Status: {data.stock_status}</p>
              <div className="card-actions justify-between">
                <Link to={`/updateitem/${data._id}`} className="btn text-white btn-accent">Update</Link>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="btn text-white btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyartandCraft;
