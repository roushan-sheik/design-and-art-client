import { Link, useRouteError } from "react-router-dom";
import gif from "../../public/Animation - 1709742745397.gif";
const NotFoundPage = () => {
  const error = useRouteError();
  return (
    <div>
      <div className="  grid grid-cols-1    ">
        <img className="w-56 text-center mx-auto" src={gif} alt="" />
        <div className=" h-screen  flex gap-3 flex-col text-center -mt-9 justify-center items-center">
          <div className="w-96 space-y-4 bg-white p-5 rounded-lg">
            <h1 className="text-3xl text-black font-bold">Page Not Found</h1>
            <p className="text-red-500">
              {error.status} : {error.statusText}
            </p>
            <p className="text-red-500">{error.data || error.message}</p>
            <p className=" text-black">
              Looks like you have followed a broken link or entered a URL that
              does not exist on this site.
            </p>
            <Link
              to="/"
              href="#_"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Back to site</span>
              </span>
            </Link>
            <hr className="my-5 " />
            <p className="text-black">
              If this is your site, and you were not expecting a {""}
              {error.status}
              {""} for this path, please visit to firebase{" "}
              <span className="hover:underline font-medium text-[#054861]">
                <Link
                  target="_blank"
                  to="https://cloud.google.com/terms/tssg/firebase"
                >
                  {" "}
                  "page not found support guide"
                </Link>{" "}
              </span>
              for troubleshooting tips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
