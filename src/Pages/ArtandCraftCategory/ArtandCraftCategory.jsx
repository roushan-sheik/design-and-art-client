import React, { useEffect, useState } from "react";
import CategoryData from "../../Components/CategoryData/CategoryData";


const ArtandCraftCategory = () => {
const [allData, setAllData] = useState([]);

// console.log(allData)

useEffect(() => {
    fetch('https://art-craft-server-side-three.vercel.app/craftcategory')
    .then(res => res.json())
    .then(data => {
        setAllData(data);
    })
    
}, [])


  return (
    <div className="max-w-6xl mx-auto mt-8 lg:mt-16">
      <div className="text-center space-y-4">
        <h2 className="text-xl md:text-3xl font-bold">
          Art & Craft Categories 
        </h2>
        <p className="w-full mx-auto px-3 md:w-[700px]">
          This section all card is art and craft category where you can select and chose your category wise items. this section help to a find this art craft items is shortly.
        </p>
      </div>
      <div className="grid grid-cols-1 px-3 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {
            allData.map(data => <CategoryData key={data._id} data={data}></CategoryData>)
        }
      </div>
    </div>
  );
};

export default ArtandCraftCategory;
