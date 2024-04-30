import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Helmet } from "react-helmet-async";

const AddartandCraft = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const item_name = form.item_name.value;
    const subcategory_Name = form.subcategory_name.value;
    const description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stock_status = form.stock_status.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;
    const itemData = {
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
    };
    console.log(itemData);

    fetch("https://art-craft-server-side-three.vercel.app/craftitems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Successfully Added",
          text: "Your item has been added.",
          icon: "success",
        });
        navigate("/myartandcraft");
        console.log(data);
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-2">
      <Helmet>
        <title>CraftiFY - Add Art & Craft </title>
      </Helmet>
      <div className="text-center space-y-4">
        <h2 className="text-xl md:text-3xl font-bold">
          Add Your Art & Craft Item
        </h2>
        <p className="w-full mx-auto px-3 md:w-[700px]">
          This form is use only added your art and craft item where you can show
          your creativity item and you make you can add our website and show
          it's a public.
        </p>
      </div>
      <div>
        <div className=" mx-auto bg-gray-200 rounded-md shadow-md my-5 p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Image URL:
              </label>
              <input
                type="text"
                id="image"
                name="image"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Item Name:
              </label>
              <input
                type="text"
                id="item_name"
                name="item_name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Subcategory Name:
              </label>
              <select
                id="subcategory_name"
                name="subcategory_name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              >
                <option value="">Select Subcategory</option>
                <option value="Landscape Painting">Landscape Painting</option>
                <option value="Portrait Drawing">Portrait Drawing</option>
                <option value="Watercolour Painting">
                  Watercolour Painting
                </option>
                <option value="Oil Painting">Oil Painting</option>
                <option value="Charcoal Sketching">Charcoal Sketching</option>
                <option value="Cartoon Drawing">Cartoon Drawing</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Short Description:
              </label>
              <textarea
                id="short_description"
                name="short_description"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                min="0"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Rating:
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                min="0"
                max="5"
                step="0.1"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Customization:
              </label>
              <select
                id="customization"
                name="customization"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              >
                <option value="">Select Customization</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Processing Time:
              </label>
              <input
                type="text"
                id="processing_time"
                name="processing_time"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Stock Status:
              </label>
              <select
                id="stock_status"
                name="stock_status"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              >
                <option value="">Select Stock Status</option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                User Email:
              </label>
              {user.email ? (
                <input
                  type="email"
                  id="user_email"
                  defaultValue={user?.email}
                  name="user_email"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="You can't edit this filed!"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  readOnly
                />
              ) : (
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              )}
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                User Name:
              </label>
              <input
                type="text"
                id="user_name"
                defaultValue={user?.displayName}
                name="user_name"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="You can't edit this filed!"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                readOnly
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full btn hover:text-black bg-[#38B2AC] hover:bg-[#7fdcd7] text-white py-2 px-4 rounded-md  transition duration-200"
              >
                Add Items
              </button>
            </div>
          </form>
          <Tooltip id="my-tooltip" />
        </div>
      </div>
    </div>
  );
};

export default AddartandCraft;
