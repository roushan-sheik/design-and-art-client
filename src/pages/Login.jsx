import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    singInuser,
    loading,
    user,
    handleGoogle,
    handleTwitter,
    handleGithub,
  } = useContext(AuthContext);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;

    setError("");
    if (user) {
      setError("User already login");
      return;
    }
    singInuser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        if (!user) {
          Swal.fire({
            title: "Good job!",
            text: "User login successfully!",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleLogin = () => {
    handleGoogle().then(() => {
      navigate(location?.state ? location.state : "/");
      toast.success("Successfully login with Google");
    });
  };
  const handleTwiiterLogin = () => {
    handleTwitter().then(() => {
      navigate(location?.state ? location.state : "/");
      toast.success("Successfully login with Twitter");
    });
  };
  const handleGIthubLogin = () => {
    handleGithub().then(() => {
      navigate(location?.state ? location.state : "/");
      toast.success("Successfully login with Github");
    });
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col shadow-lg border-b-8 rounded-3xl border-b-[hsl(34,97%,57%)]">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <span>Email</span>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  name="email"
                  className="grow"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />{" "}
              </label>
              {errors.email && (
                <span className=" text-red-500">This field is required</span>
              )}
              <span className=" text-red-500"> {error}</span>
            </div>
            <div className="form-control">
              <span>Password</span>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  name="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                />
              </label>
              {errors.password && (
                <span className=" text-red-500">This field is required</span>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Login"
                )}{" "}
              </button>
            </div>
            <div className="divider">or</div>
          </form>
          <div className="-mt-8">
            <p className=" text-center">Continue with </p>
            <div className="flex gap-5 justify-center pt-4">
              <button
                onClick={handleGoogleLogin}
                className="hover:bg-slate-300 rounded-full p-3"
              >
                <FcGoogle size={25} />
              </button>
              <button
                onClick={handleTwiiterLogin}
                className="hover:bg-slate-300 rounded-full p-3 text-sky-300"
              >
                <FaTwitter size={25} />
              </button>
              <button
                onClick={handleGIthubLogin}
                className="hover:bg-slate-300 rounded-full p-3"
              >
                <FaGithub size={25} />
              </button>
            </div>
          </div>
        </div>
        <p>
          Do not have an account ? Please{" "}
          <Link to="/register" className="btn-link no-underline text-[#fc5927]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
