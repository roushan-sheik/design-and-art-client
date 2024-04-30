import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
    const {id} = useParams();
    const [Items, setItems] = useState({});
  

    useEffect(() => {
        fetch(`https://art-craft-server-side-three.vercel.app/singleItems/${id}`)
        .then(res => res.json())
        .then(data => {
            setItems(data)
            
        })
    },[id])


    return (
        <div className='max-w-6xl mx-auto '>
           <Helmet>
        <title>CraftiFY - Details Art & Craft </title>
      </Helmet>
            <h2 className='text-center text-3xl font-bold'>Art and Craft Details</h2>
            <div className="card my-5 w-full rounded-md bg-base-100 shadow-none border ">
        <figure>
          <img
            src={Items.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{Items.item_name}</h2>
          <p><span className="font-semibold text-lg">Category:</span> {Items.subcategory_Name}</p>
          <p>{Items.description}</p>
          <p><span className="font-semibold text-lg">price:</span> ${Items.price}</p>
          <p className="flex items-center gap-1"><span className="font-semibold text-lg">Rating:</span> {Items.rating}</p>
          <p className="flex items-center gap-1"><span className="font-semibold text-lg">Customization:</span> {Items.customization}</p>
        
          <p><span className="font-semibold text-lg">Processing Time:</span> {Items.processing_time}</p>
          <p><span className="font-semibold text-lg">Stock Status:</span> {Items.stock_status}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-[#38B2AC] text-white hover:text-black rounded-md">Buy Now</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default DetailsPage;