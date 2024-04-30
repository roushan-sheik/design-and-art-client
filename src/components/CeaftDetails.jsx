import { useContext } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { useLoaderData, useNavigation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const CeaftDetails = () => {
  const product = useLoaderData();
  const navigation = useNavigation();
  const { loading } = useContext(AuthContext);
  const {
    category,
    username,
    time,
    subcategory,
    stockStatus,
    rating,
    price,
    photo,
    image,
    timestamp,
    user_email,
    description,
    customization,
  } = product;
  console.log(username);
  console.log(photo);
  if (loading) {
    return (
      <div className="h-[calc(100vh-80px)] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (navigation.state === "loading")
    return (
      <div className="h-[calc(100vh-80px)] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  return (
    <div>
      {" "}
      <div className="flex justify-center">
        <div className="flex flex-col  w-[80%]  p-6 shadow-2xl space-y-6 overflow-hidden rounded-lg dark:bg-gray-50 dark:text-gray-800">
          <div className="flex space-x-4">
            <div>
              <img
                alt=""
                src={image}
                className="object-cover  h-12 rounded-full shadow dark:bg-gray-500"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              >
                {username}
              </a>
              <span className="text-xs dark:text-gray-600">
                {timestamp && timestamp.split("T")[0]} POST
              </span>
            </div>
          </div>
          <div>
            <img
              src={photo}
              alt=""
              className=" w-full mb-4 h-96 md:h-[450px] lg:h-[550px] dark:bg-gray-500"
            />
            <h2 className="mb-1 text-xl font-semibold">
              <span className=" font-bold">Category</span> : {category}
            </h2>
            <h2 className="mb-1 text-xl font-semibold">
              <span className=" font-bold"> Subcategory</span> : {subcategory}
            </h2>
            <p className="text-sm dark:text-gray-600 break-all">
              <strong>Description</strong>: {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-8 justify-between">
            <div className=" space-y-2">
              <label className="flex items-center gap-3">
                <strong>StockStatus :</strong>{" "}
                <input
                  type="radio"
                  name="radio-5"
                  className="radio radio-success"
                  defaultChecked
                />
                <span className="font-semibold text-lg">{stockStatus}</span>
              </label>
              <label className="flex items-center gap-3">
                <strong> Customization :</strong>
                <input
                  type="radio"
                  name="radio-2"
                  className="radio radio-success"
                  defaultChecked
                />
                <span className="font-semibold text-lg"> {customization}</span>
              </label>
              <p className="flex items-center gap-1 break-all">
                <MdAttachEmail />
                <strong>Contact :</strong> {user_email}
              </p>
            </div>
            <div className=" space-y-2">
              <p className="flex items-center gap-1">
                <AiOutlineFieldTime size={20} />
                <strong>Poccesing-Time : </strong>
                {time}
              </p>
              <p className="flex items-center gap-1">
                <FaMoneyCheckDollar /> <strong>Price : </strong>
                {price}
              </p>
              <p className="flex items-center gap-1">
                <strong>Rating : </strong>
                {rating} <FaStar className="text-orange-600" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeaftDetails;
