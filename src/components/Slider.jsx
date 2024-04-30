import Proptypes from "prop-types";
const Slider = ({ slider }) => {
  const { photo, category, subcategory, description } = slider;
  return (
    <div>
      <div className=" relative">
        <img
          className=" h-[400px] md:h-[500px] lg:h-[750px] bg-cover w-full  "
          src={photo}
          alt=""
        />
        <div className=" absolute  space-y-3 left-[20%] top-[50%] bg-center">
          <h2 className="text-[#fc7527] text-3xl font-bold lg:text-5xl">
            {category}
          </h2>
          <p className="font-semibold  text-[#D10000] text-xl">{subcategory}</p>
          <p className="text-[#FFFF00] text-lg font-medium w-2/3">
            {description.slice(0, 400)}
          </p>
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  slider: Proptypes.object.isRequired,
};
export default Slider;
