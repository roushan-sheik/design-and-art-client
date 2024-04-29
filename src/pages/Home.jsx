import { Navigation, Pagination, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "../components/Slider";
import { useContext, useEffect, useState } from "react";

import CraftCard from "../components/CraftCard";
import { AuthContext } from "../Provider/AuthProvider";
import PaintingCard from "../components/PaintingCard";
const Home = () => {
  const [products, SetProducts] = useState([]);
  const { loading } = useContext(AuthContext);
  const [product, setProducts] = useState([]);
  const [paintings, setPaintings] = useState([]);
  const [loader, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setProducts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        SetProducts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/paintings")
      .then((res) => res.json())
      .then((data) => {
        setPaintings(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="min-h-screen">
      {loading || loader ? (
        <div className="flex justify-center items-center h-[150px]">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <section className="slider">
          <Swiper
            slidesPerView={1}
            navigation={true}
            zoom={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Zoom, Pagination, Navigation]}
            className="mySwiper"
          >
            {products.map((slider) => (
              <SwiperSlide key={slider._id}>
                <Slider slider={slider}></Slider>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      <section className="mt-6">
        <div className="text-center space-y-12 my-20">
          <h2 className=" text-3xl font-bold text-[#fc7527]">Arts & Crafts</h2>
          <p className=" text-xl break-all">
            Arts and crafts describes a wide variety of activities involving
            making things with of one own hands. Arts and crafts is usually a
            hobby. Some crafts (art skills) have been practised since
            preshistoric times, others are more recent inventions.
          </p>
        </div>
        {loader || loading ? (
          <div className="flex justify-center items-center h-[calc(100px-70)]">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {product.slice(0, 6).map((prod) => (
              <CraftCard key={prod._id} prod={prod}></CraftCard>
            ))}
          </div>
        )}
      </section>
      <section>
        <div className="">
          <h2 className=" text-4xl font-bold flex text-[#fc7527] justify-center my-14">
            Arts & Crafts Category
          </h2>
          <p className=" text-center mb-3">
            The Arts & Crafts category encompasses a wide range of creative
            endeavors that involve crafting, making, and artistic expression.
            From traditional handicrafts to modern DIY projects, this category
            celebrates the joy of creating handmade items and exploring artistic
            techniques
          </p>
        </div>
        {loader || loading ? (
          <div className="flex justify-center items-center h-[calc(100px-70)]">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paintings.map((painting) => (
              <PaintingCard
                key={painting._id}
                painting={painting}
              ></PaintingCard>
            ))}
          </div>
        )}
      </section>

      <section>
        <div className="text-center my-14 space-y-8">
          <h1 className="text-4xl font-bold text-[#fc7527] ">Gallery</h1>
          <p>
            A gallery is a space dedicated to the exhibition and appreciation of
            visual art. It serves as a cultural hub where artists showcase their
            works to the public and visitors engage with art in various forms.
            Within a gallery, visitors can immerse themselves in a diverse range
            of artistic expressions, from traditional paintings and sculptures
            to avant-garde installations and multimedia presentations.
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-[calc(100px-70)]">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="gallery">
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
              <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <img
                  src="https://i.ibb.co/1f1sp6T/cartoon-stripe.jpg"
                  alt=""
                  className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/mhbdTmY/cartoonzip.jpg"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/Tcf1LT4/pencil.jpg"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/pWZgXm4/oil.jpg"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/cLHgpf2/prolar.jpg"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/r0tfQtq/skach.jpg"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/PtXfM1t/mauntaint.jpg"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/1Lk2jWY/cartoon.jpg"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/DDwWqBW/carchol.jpg"
                />
                <img
                  src="https://i.ibb.co/xqSq5MJ/water.jpg"
                  alt=""
                  className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
                />
                <img
                  src="https://i.ibb.co/FW03yX9/parotiat.jpg"
                  alt=""
                  className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/xgBq8mr/parotia.jpg"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/JFKLD3V/paingting4.jpg"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/HN8hTnm/painting2.jpg"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/hDpPRzh/painting1.jpg "
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/HV5GVGY/canvas.jpg"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/wWqPZZn/Forest.jpg"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/J5byYy9/Ink.jpg"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/kMKKTSj/river-forest-with-river-trees-337384-20353.jpg"
                />
              </div>
            </section>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
