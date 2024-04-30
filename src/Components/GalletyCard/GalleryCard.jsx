import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const GalleryCard = ({ item }) => {
  return (
    <div>
      <div className="card w-full bg-base-100 rounded-md shadow-xl ">
        <figure>
          <img
            src={item.image}
            alt={item.item_name}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={item.item_name}
            className="rounded-md"
          />
        </figure>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default GalleryCard;
