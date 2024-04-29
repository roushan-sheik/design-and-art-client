import Proptypes from "prop-types";
import { Link } from "react-router-dom";
const CraftCard = ({ prod }) => {
  const { photo, _id, category, subcategory, description } = prod;
  return (
    <div>
      <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src={photo}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2 flex-grow">
            <h4>
              <strong>{category}</strong>
            </h4>
            <h2 className="text-2xl font-semibold tracking-wide">
              {subcategory}
            </h2>
            <p className="dark:text-gray-800 break-all">
              {description.slice(0, 100)}
            </p>
          </div>
          <Link
            to={`/craftdetails/${_id}`}
            className="btn bg-[#fc9f27] text-white text-lg hover:bg-green-500"
          >
            Veiw Details
          </Link>
        </div>
      </div>
    </div>
  );
};

CraftCard.propTypes = {
  prod: Proptypes.object.isRequired,
};
export default CraftCard;
