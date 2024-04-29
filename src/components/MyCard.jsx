import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyCard = ({ product, setItems, products }) => {
  const {
    photo,
    _id,
    category,
    price,
    rating,
    stockStatus,
    customization,
    subcategory,
    description,
    timestamp,
  } = product;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaing = products.filter((p) => p._id !== id);
              setItems(remaing);
            }
          });
      }
    });
  };
  return (
    <div className="">
      <div className=" p-6 rounded-lg shadow-md  dark:bg-gray-50 dark:text-gray-900">
        <div className="overflow-hidden">
          <img
            src={photo}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 transition-all hover:scale-110  dark:bg-gray-500"
          />
        </div>
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
            <strong>Category :</strong> {category}
          </span>
          <h2 className="text-xl font-semibold tracking-wide mt-3">
            {subcategory}
          </h2>
        </div>
        <p className="dark:text-gray-800 break-all">{description}</p>
        <div className="flex justify-between items-center">
          <div className="mt-4 space-y-1">
            <p>
              <strong>Publist At : </strong>
              {timestamp.split("T")[0]}
            </p>
            <p>
              <strong>Price : </strong>
              {price}
            </p>
            <p>
              <strong>StockStatus : </strong>
              {stockStatus}
            </p>
            <p>
              <strong>Customization : </strong>
              {customization}
            </p>
            <p>
              <strong>Rating : </strong>
              {rating}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <Link
              to={`/update/${_id}`}
              className="btn rounded-full hover:bg-[#ff9409]"
            >
              <FaUserEdit size={20} />
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn rounded-full hover:bg-[#ff9409]"
            >
              <RiDeleteBin2Fill size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MyCard.propTypes = {
  product: Proptypes.object.isRequired,
  products: Proptypes.array.isRequired,
  setItems: Proptypes.any.isRequired,
};
export default MyCard;
