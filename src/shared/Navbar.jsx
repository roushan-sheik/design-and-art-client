import { useContext, useEffect, useState } from "react";
import { FaBarsStaggered, FaUser } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { FaEdit, FaPhotoVideo } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut, loading, updateUser } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <NavLink
        className="hover:bg-base-200 p-2 hover:rounded-lg"
        style={({ isActive, isTransiTion }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#fc9f27" : "",
            borderBottom: isActive ? "2px solid #fc9f27" : "",
            viewTimelineName: isTransiTion ? "silder" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="hover:bg-base-200 p-2 hover:rounded-lg"
        style={({ isActive, isTransiTion }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#fc9f27" : "",
            borderBottom: isActive ? "2px solid #fc9f27" : "",
            viewTimelineName: isTransiTion ? "silder" : "",
          };
        }}
        to="/allartscrafts"
      >
        All Arts&Crafts
      </NavLink>
      <NavLink
        className="hover:bg-base-200 p-2 hover:rounded-lg"
        style={({ isActive, isTransiTion }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#fc9f27" : "",
            borderBottom: isActive ? "2px solid #fc9f27" : "",
            viewTimelineName: isTransiTion ? "silder" : "",
          };
        }}
        to="/addartscrafts"
      >
        Add Arts & Crafts
      </NavLink>
      <NavLink
        className="hover:bg-base-200 p-2 hover:rounded-lg"
        style={({ isActive, isTransiTion }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#fc9f27" : "",
            borderBottom: isActive ? "2px solid #fc9f27" : "",
            viewTimelineName: isTransiTion ? "silder" : "",
          };
        }}
        to="/myartscrafts"
      >
        My Arts & Crafts
      </NavLink>
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("logout successfully");
      })
      .catch(() => {});
  };
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setTheme(localTheme);
    if (localTheme) {
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.querySelector("html").setAttribute("data-theme", "light");
      setTheme("light");
    }
  };
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    const username = from.get("username");
    const photo = from.get("photo");
    updateUser(username, photo).then(() => {
      toast.success("Profile update successfully");
    });
  };
  return (
    <div>
      <div className="my-4">
        <div className="flex justify-between items-center shadow-sm">
          <div className="flex items-center">
            <div className="">
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden mr-2 hover:bg-slate-200 p-2 rounded-lg"
              >
                {open === true ? (
                  <IoCloseSharp size={30} />
                ) : (
                  <FaBarsStaggered size={30} />
                )}
              </button>
              <div
                className={`lg:hidden top-20 fixed inset-0 z-50 transition-transform ${
                  open
                    ? "transform-none duration-500 pointer-events-auto"
                    : "-translate-x-full pointer-events-none"
                }`}
              >
                <div className=" h-full w-64 ">
                  <ul className="bg-white p-4 px-6 space-y-5 flex flex-col rounded-r-lg">
                    {links}
                  </ul>
                </div>
              </div>
            </div>
            <button className=" font-bold text-3xl text-[#ff9409]">
              Arts & Crafts
            </button>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-6">{links}</ul>
          </div>

          <div className="flex items-center gap-2">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                onChange={handleToggle}
                checked={theme === "dark"}
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            {loading ? (
              <span className="loading loading-spinner loading-md mr-3"></span>
            ) : user ? (
              <div className="dropdown dropdown-hover dropdown-left ">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    className="w-10 h-10 rounded-full "
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/R3SSpJQ/145856997-296fe121-5dfa-43f4-98b5-db50019738a7.jpg"
                    }
                    alt=""
                  />
                </div>
                <div
                  tabIndex={0}
                  className="dropdown-content z-50 card card-compact w-64 p-2 shadow-lg bg-white text-primary-content"
                >
                  <div className="hidden md:block lg:block text-end">
                    <details className="dropdown ">
                      <summary className="m-1 btn">
                        <div
                          className="tooltip tooltip-left"
                          data-tip="update profile!"
                        >
                          <FaEdit size={25} />
                        </div>
                      </summary>

                      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-72">
                        <form onSubmit={handleUpdateProfile}>
                          <label className="input input-bordered mb-4 flex text-secondary items-center gap-2">
                            <FaUser></FaUser>

                            <input
                              type="text"
                              name="username"
                              className="grow text-secondary"
                              placeholder="Username"
                            />
                          </label>
                          <label className="input input-bordered mb-4 flex text-secondary items-center gap-2">
                            <FaPhotoVideo size={20} />
                            <input
                              type="text"
                              name="photo"
                              className="grow text-secondary"
                              placeholder="Photo_URL"
                            />
                          </label>
                          <label>
                            <button className="btn w-full  hover:text-black text-white bg-[#fca027e5] hover:bg-green-500 font-bold">
                              Update
                            </button>
                          </label>
                        </form>
                      </ul>
                    </details>
                  </div>
                  <div className="card-body">
                    <img
                      className="w-32 h-32 rounded-full text-center mx-auto"
                      src={
                        user.photoURL ||
                        "https://i.ibb.co/R3SSpJQ/145856997-296fe121-5dfa-43f4-98b5-db50019738a7.jpg"
                      }
                      alt=""
                    />
                    <h3 className="card-title text-black">
                      {user.displayName}
                    </h3>
                    <p className=" text-black">{user.email}</p>
                  </div>
                  <button onClick={handleLogOut} className=" btn">
                    <FiLogOut size={25} /> Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="dropdown lg:hidden dropdown-hover dropdown-left dropdown-bottom">
                  <div
                    tabIndex={0}
                    role="button"
                    className="hover:bg-base-200 rounded-lg p-3 m-1"
                  >
                    <BsThreeDotsVertical />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <div className=" flex flex-col gap-2">
                      <Link
                        to="/login"
                        className="btn text-[#fc9f27] bg-transparent border-[#fc9f27] hover:text-white hover:bg-[#fc6a27]"
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="btn  text-white hover:text-[#fc9f27] bg-[#fca027e5] hover:border-[#fc9f27] hover:bg-[transparent]"
                      >
                        Register
                      </Link>
                    </div>
                  </ul>
                </div>

                <div className="hidden lg:flex space-x-2">
                  <Link
                    to="/login"
                    className="btn text-[#fc9f27] bg-transparent border-[#fc9f27] hover:text-white hover:bg-[#fc6a27]"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn text-white hover:text-[#fc9f27] bg-[#fca027e5] hover:border-[#fc9f27] hover:bg-[transparent]"
                  >
                    Register
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
