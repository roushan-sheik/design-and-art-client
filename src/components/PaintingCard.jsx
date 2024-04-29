import Proptypes from "prop-types";
import { Link } from "react-router-dom";

const PaintingCard = ({ painting }) => {
  const { category, photo } = painting;
  return (
    <Link to={`/categorys/${category}`}>
      <div className=" relative p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img
          src={photo}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />

        <h2 className="text-3xl text-[#fc9f27] absolute bottom-1/4 left-1/5 font-bold tracking-wide">
          {category}
        </h2>
      </div>
    </Link>
  );
};

PaintingCard.propTypes = {
  painting: Proptypes.object.isRequired,
};
export default PaintingCard;
