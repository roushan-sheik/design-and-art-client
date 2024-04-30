import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    const {createUser, updateUserProfile, logOut} = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { fullName, email, image, password } = data;
     
        setPasswordError("");
    
        if (password.length == "") {
          setPasswordError("Password field is required");
          return;
        } else if (password.length < 6) {
          setPasswordError("Password should be 6 character or longer ");
          return;
        } else if (!/[A-Z]/.test(password)) {
          setPasswordError("add at least one uppercase later");
          return;
        } else if (!/[a-z]/.test(password)) {
          setPasswordError("add at least one lowercase later");
          return;
        }
        
        // create user
        createUser(email, password)
          .then((result) => {
            updateUserProfile(fullName, image)
            .then(() => {
              toast.success("Registration Successfully")
              logOut();
              navigate('/login')
            })
          })
          .catch((error) => {
            toast.error("Email is already exist")
          });
      };
    



  return (
    <div>
      <Helmet>
        <title>CraftiFY - Sign Up</title>
      </Helmet>
      <div className="flex flex-col items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body lg:w-[30%] border rounded-md"
        >
          <h2 className="text-center text-2xl md:text-3xl font-bold">
            Sign Up
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered rounded-md"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">write your name</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered rounded-md"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              className="input input-bordered rounded-md"
              {...register("image")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <label className="input input-bordered rounded-md flex items-center gap-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                {...register("password")}
              />
              <span
                className="relative lg:-right-20  text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaRegEyeSlash></FaRegEyeSlash>
                ) : (
                  <FaRegEye></FaRegEye>
                )}
              </span>
            </label>

            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#38B2AC] text-white hover:text-black rounded-md ">
              Register
            </button>
          </div>
          <h2 className="text-center mt-2 font-medium">
            Already have an account?{" "}
            <Link to={"/login"} className="text-[#38B2AC] underline">
              Login
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
