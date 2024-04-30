import React from "react";
import Lottie from "lottie-react";
import Contact from "./Contact.json";

const ContactSec = () => {
  return (
    <div className="max-w-6xl mx-auto mt-8 lg:mt-16">
      <div className="text-center space-y-4">
        <h2 className="text-xl md:text-3xl font-bold">Contact Us</h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-6 gap-5">
        <div className="flex-1">
          <Lottie animationData={Contact} />
        </div>
        <div className="flex-1 w-full">
        <div className=" w-full p-6 bg-white rounded-md border shadow-none lg:mt-3">
            <form className="" method="POST">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input rounded-md input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input rounded-md input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input rounded-md input-bordered"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  
                  className="block text-gray-700 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-none border focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="btn btn-accent rounded-md text-white "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSec;
