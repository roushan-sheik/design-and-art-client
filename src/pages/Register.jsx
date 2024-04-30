import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaPhotoFilm, FaTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Register = () => {
  const {
    createUser,
    updateUser,
    loading,
    setLoading,
    handleGithub,
    handleGoogle,
    handleTwitter,
  } = useContext(AuthContext);
  const [passwordError, setpasswordError] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [accept, setAccept] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { username, photo, email, password, confirmpassword, checkbox } =
      data;

    setError("");
    setpasswordError("");
    setAccept("");
    if (password != confirmpassword) {
      setpasswordError("Password did not match");
      toast.error("Password did not match");
      return;
    }
    if (password.length < 6) {
      setpasswordError("password should be at least 6 characters or longer");
      toast.error("password should be at least 6 characters or longer");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setpasswordError("Password should be at least one uppercase");
      toast.error("Password should be at least one uppercase");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setpasswordError("Password should be at least one lowercase");
      toast.error("Password should be at least one lowercase");
      return;
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      setpasswordError("Password should be at least one special character");
      toast.error("Password should be at least one special character");
      return;
    }
    if (!checkbox) {
      setAccept("Please accept our terms & conditions");
      toast.error("Please accept our terms & conditions");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUser(username, photo).then(() => {});
        console.log(result.user);
        navigate("/");
        Swal.fire({
          title: "Good job!",
          text: "User create successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, [1000]);
      });
  };
  const handleGoogleLogin = () => {
    handleGoogle().then(() => {
      navigate("/");
      toast.success("Successfully login with Google");
    });
  };
  const handleTwiiterLogin = () => {
    handleTwitter().then(() => {
      navigate("/");
      toast.success("Successfully login with Twitter");
    });
  };
  const handleGithubLogin = () => {
    handleGithub().then(() => {
      navigate("/");
      toast.success("Successfully login with Github");
    });
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col shadow-lg border-b-8 rounded-3xl border-b-[#fc9f27]">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <span>UserName</span>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  name="username"
                  className="grow"
                  placeholder="Username"
                  {...register("username", { required: true })}
                />
              </label>

              {errors.username && (
                <span className=" text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <span>Photo</span>
              <label className="input input-bordered flex items-center gap-2">
                <FaPhotoFilm />
                <input
                  type="text"
                  name="photo"
                  className="grow"
                  placeholder="photo"
                  {...register("photo")}
                />{" "}
              </label>
            </div>
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
              <span className="text-red-500">{error.split(":")[1]}</span>
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
              <span className="text-red-500">{passwordError}</span>
            </div>
            <div className="form-control">
              <span>confirm-Password</span>
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
                  name="confirmpassword"
                  className="grow"
                  placeholder="confirmpassword"
                  {...register("confirmpassword", { required: true })}
                />{" "}
              </label>
              {errors.confirmpassword && (
                <span className=" text-red-500">This field is required</span>
              )}
              <div className="flex justify-between mt-3">
                {/* <div className=""> */}
                <label className="mt-3 flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    {...register("checkbox")}
                  />
                  <Link to="/terms" className="label-text-alt link link-hover">
                    Accept our Terms & conditions
                  </Link>
                </label>
              </div>
              <p className="text-red-500">{accept}</p>
              {/* </div> */}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Register"
                )}
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
                onClick={handleGithubLogin}
                className="hover:bg-slate-300 rounded-full p-3"
              >
                <FaGithub size={25} />
              </button>
            </div>
          </div>
        </div>
        <p>
          Allready have an account.Please{" "}
          <Link to="/login" className="btn-link no-underline text-[#fc5927]">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
