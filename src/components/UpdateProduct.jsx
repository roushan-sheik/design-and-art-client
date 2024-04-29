import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { user, loading } = useContext(AuthContext);

  const product = useLoaderData();
  const {
    category,
    rating,
    price,
    _id,
    time,
    photo,
    subcategory,
    customization,
    stockStatus,
    description,
  } = product;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const category = form.category.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const subcategory = form.subcategory.value;
    const time = form.time.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const username = user.displayName;
    const email = user.email;
    const image = user.photoURL;
    const upadateproducts = {
      category,
      rating,
      username,
      email,
      image,
      price,
      time,
      description,
      customization,
      stockStatus,
      photo,
      subcategory,
    };
    console.log(upadateproducts);
    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upadateproducts),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Product Update successfully!",
            icon: "success",
          });
        }
      });
    e.target.reset();
  };
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      {" "}
      <div className="my-8">
        <form onSubmit={handleSubmit} className=" space-y-4">
          {/* form quantity row */}
          <div className="lg:flex gap-4 ">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-xl">Item Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  className="input input-bordered w-full"
                  placeholder=" item_name"
                  defaultValue={category}
                  required
                />
              </label>
            </div>
            <div className="form-control  lg:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-xl">
                  Subcategory Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="subcategory"
                  className="input input-bordered w-full"
                  placeholder="subcategory_name"
                  defaultValue={subcategory}
                  required
                />
              </label>
            </div>
          </div>
          {/* form quantity row */}
          <div className="lg:flex gap-4">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-xl">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  className="input input-bordered w-full"
                  placeholder="price"
                  defaultValue={price}
                  required
                />
              </label>
            </div>
            <div className="form-control  lg:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-xl">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  className="input input-bordered w-full"
                  placeholder="rating"
                  defaultValue={rating}
                  required
                />
              </label>
            </div>
          </div>
          {/* form quantity row */}
          <div className="lg:flex gap-4">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-xl">
                  Processing Time
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="time"
                  className="input input-bordered w-full"
                  placeholder="processing_time"
                  defaultValue={time}
                  required
                />
              </label>
            </div>
            <div className="form-control  lg:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-xl">Photo</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  className="input input-bordered w-full"
                  placeholder="photo"
                  defaultValue={photo}
                  required
                />
              </label>
            </div>
          </div>
          {/* form quantity row */}
          <div className="lg:flex gap-4">
            <div className="form-control lg:w-1/2 mt-6">
              <div className="">
                <label className=" space-y-2">
                  <span className="font-bold text-xl">Customization</span>{" "}
                  <br />
                  <select
                    name="customization"
                    defaultValue={customization}
                    id=""
                    className="input input-bordered w-full"
                  >
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                  </select>
                </label>
              </div>
              <div className="mt-8">
                <label className=" space-y-2">
                  <span className="font-bold text-xl">StockStatus</span> <br />
                  <select
                    name="stockStatus"
                    id=""
                    className="input input-bordered w-full"
                    defaultValue={stockStatus}
                  >
                    <option value="inStock">inStock</option>
                    <option value="madeToOrder">madeToOrder</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="form-control ml-3 lg:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-xl">
                  Description
                </span>
              </label>

              <label className="input-group">
                <textarea
                  cols="40"
                  rows="10"
                  type="text"
                  name="description"
                  className="border-2 p-2 rounded-lg input-bordered w-full"
                  placeholder="description"
                  defaultValue={description}
                  required
                ></textarea>
              </label>
            </div>
          </div>
          <div className="flex justify-center mx-6">
            <button className="btn w-full  font-bold text-xl hover:text-black hover:bg-green-500 bg-[#ff9409] text-white mb-6">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
