import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://art-craft-server-side-three.vercel.app/updateItem/${id}`)
    .then(res => res.json())
    .then(data => {
        setProduct(data)
    })
  }, [id])

  const handleSubmit = e => {
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
    const updateInfo = {image, item_name, subcategory_Name, description, price, rating, customization, processing_time, stock_status}
    
    fetch(`https://art-craft-server-side-three.vercel.app/updateInfoo/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json"},
        body:JSON.stringify(updateInfo)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            Swal.fire({
                title: "Update Changes",
                text: "Your item has been updated.",
                icon: "success",
            });
            navigate('/myartandcraft')
            console.log(data);
        }
    })
  }

 

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-xl md:text-3xl font-bold">Update Art & Craft</h2>
      </div>

      <div>
      <Helmet>
        <title>CraftiFY - Update Art & Craft</title>
      </Helmet>
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
                defaultValue={product.item_name}
                className="mt-1 pl-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                defaultValue={product.price}
                min="0"
                className="mt-1 pl-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                defaultValue={product.rating}
                min="0"
                max="5"
                step="0.1"
                className="mt-1 pl-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
              <button
                type="submit"
                className="w-full bg-[#38B2AC] text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200"
              >
                Update Items
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
