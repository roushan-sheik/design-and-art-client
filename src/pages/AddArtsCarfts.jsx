import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddArtsCarfts = () => {
  const { user, loading } = useContext(AuthContext);
  const [stockStatus, setStockStatus] = useState("inStock");
  const [customization, setCustomization] = useState("yes");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const category = form.category.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const name = form.name.value;
    const user_email = form.email.value;
    const subcategory = form.subcategory.value;
    const time = form.time.value;
    const photo = form.photo.value;
    const description = form.description.value;

    const image = user.photoURL;
    const products = {
      category,
      rating,
      name,
      user_email,
      image,
      price,
      time,
      description,
      photo,
      subcategory,
      stockStatus,
      customization,
    };
    console.log(products);
    fetch("https://backend-orcin-ten-82.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Product add successfully!",
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
    <div className="my-8">
      <form onSubmit={handleSubmit} className=" space-y-4">
        {/* form quantity row */}
        <div className="lg:flex gap-4 ">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text font-bold text-xl">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder=" Username"
                defaultValue={user.displayName}
                required
              />
            </label>
          </div>
          <div className="form-control  lg:w-1/2">
            <label className="label">
              <span className="label-text font-bold text-xl">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="email"
                className="input input-bordered w-full"
                placeholder="email"
                value={user.email}
              />
            </label>
          </div>
        </div>
        {/* form quantity row */}
        <div className="lg:flex gap-4 ">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text font-bold text-xl">
                Category Name
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                className="input input-bordered w-full"
                placeholder=" item_name"
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
                required
              />
            </label>
          </div>
        </div>
        {/* form quantity row */}
        <div className="lg:flex gap-4">
          <div className="form-control lg:w-1/2">
            <div className="">
              <label className="label">
                <span className="label-text font-bold text-xl">
                  StockStatus
                </span>
              </label>
              <label className="input-group flex items-center gap-3">
                <input
                  type="radio"
                  name="stock"
                  value="inStock"
                  checked={stockStatus === "inStock"}
                  onChange={() => setStockStatus("inStock")}
                  className="radio radio-success"
                />
                <span> In stock</span>
                <input
                  type="radio"
                  name="made"
                  value="madeToOrder"
                  checked={stockStatus === "madeToOrder"}
                  onChange={() => setStockStatus("madeToOrder")}
                  className="radio radio-success"
                />
                <span> Made to Order</span>
              </label>
            </div>
            <div className="mt-12">
              <label className="label">
                <span className="label-text font-bold text-xl">
                  Customization
                </span>
              </label>
              <label className="input-group flex items-center gap-3">
                <input
                  type="radio"
                  name="yes"
                  value="madeToOrder"
                  checked={customization === "yes"}
                  onChange={() => setCustomization("yes")}
                  className="radio radio-success"
                />
                <span> Yes</span>
                <input
                  type="radio"
                  value="madeToOrder"
                  checked={customization === "no"}
                  onChange={() => setCustomization("no")}
                  name="no"
                  className="radio radio-success"
                />
                <span> No</span>
              </label>
            </div>
          </div>
          <div className="form-control ml-3 lg:w-1/2">
            <label className="label">
              <span className="label-text font-bold text-xl">Description</span>
            </label>

            <label className="input-group">
              <textarea
                cols="40"
                rows="10"
                type="text"
                name="description"
                className="border-2 p-2 rounded-lg input-bordered w-full"
                placeholder="description"
                required
              ></textarea>
            </label>
          </div>
        </div>

        <div className="flex justify-center mx-6">
          <button className="btn btn-block font-bold text-xl hover:text-black hover:bg-green-500 bg-[#fc9f27] text-white mb-6">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArtsCarfts;
