import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyCard from "../components/MyCard";
import { IoIosArrowDown } from "react-icons/io";

const MyArtsCarfts = () => {
  const { user } = useContext(AuthContext) || {};
  const [items, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [products, setItems] = useState([]);
  const [filter, setFilter] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoader(false);
      });
  }, [user]);
  useEffect(() => {
    if (filter === null) {
      setItems(items);
    } else {
      const filteredProducts = items.filter(
        (product) => product.customization === filter
      );
      setItems(filteredProducts);
    }
  }, [items, filter]);
  const handleFilter = (ALL) => {
    if (ALL === "all") {
      setFilter(null);
    }
  };
  if (loader) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-100px)]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (products.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center flex-col">
        <h2 className=" text-5xl font-semibold text-center">
          <i>No data available!</i>
        </h2>{" "}
        <h3 className=" text-5xl font-semibold mt-1">
          <i>Please upload some data!</i>
        </h3>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <div className="flex justify-center ">
        <div className="dropdown dropdown-hover mb-4">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter by Customization <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => setFilter("yes")}> Yes</a>
            </li>
            <li>
              <a onClick={() => setFilter("no")}>No</a>
            </li>
            <li>
              <a onClick={() => handleFilter("all")}>All</a>
            </li>
          </ul>
        </div>
      </div>
      {/* card start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <MyCard
            key={product._id}
            product={product}
            products={products}
            setItems={setItems}
          ></MyCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtsCarfts;
