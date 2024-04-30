import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AllArtsCarts = () => {
  const [products, setProducts] = useState([]);
  const { loading } = useContext(AuthContext);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetch("https://backend-orcin-ten-82.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoad(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-[calc(100vh-80px)] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (load) {
    return (
      <div className="h-[calc(100vh-80px)] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>
                <strong>Category</strong>
              </th>
              <th>
                <strong>Subcategory</strong>
              </th>
              <th>
                <strong>Customization</strong>
              </th>
              <th>
                <strong>Details</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product, idx) => (
              <tr key={product._id} className=" hover">
                <th>{idx + 1}</th>
                <td>{product.category}</td>
                <td>{product.subcategory}</td>
                <td>{product.customization}</td>
                <td>
                  <Link
                    to={`/details/${product._id}`}
                    className="btn bg-transparent hover:bg-[#fc9927] hover:text-white text-[#fc5927] border-[#fc5927]"
                  >
                    View
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtsCarts;
