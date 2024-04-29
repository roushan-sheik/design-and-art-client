import { createBrowserRouter } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import CategoryDetails from "../components/CategoryDetails";
import CeaftDetails from "../components/CeaftDetails";
import UpdateProduct from "../components/UpdateProduct";
import VeiwDetails from "../components/VeiwDetails";
import AddArtsCarfts from "../pages/AddArtsCarfts";
import AllArtsCarts from "../pages/AllArtsCarts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyArtsCarfts from "../pages/MyArtsCarfts";
import NotFoundPage from "../pages/NotFoundPage";
import Register from "../pages/Register";
import Private from "../Private/Private";
import Root from "./Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addartscrafts",
        element: (
          <Private>
            <AddArtsCarfts />
          </Private>
        ),
      },
      {
        path: "/allartscrafts",
        element: <AllArtsCarts />,
      },
      {
        path: "/myartscrafts",
        element: (
          <Private>
            <MyArtsCarfts />
          </Private>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/details/:id",
        element: (
          <Private>
            <VeiwDetails></VeiwDetails>
          </Private>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <Private>
            {" "}
            <UpdateProduct></UpdateProduct>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://backend-orcin-ten-82.vercel.app/products/${params.id}`),
      },
      {
        path: "/craftdetails/:id",
        element: (
          <Private>
            <CeaftDetails></CeaftDetails>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`https://backend-orcin-ten-82.vercel.app/product/${params.id}`),
      },
      {
        path: "/categorys/:category",
        element: <CategoryCard></CategoryCard>,
      },
      {
        path: "/categoryDetails/:id",
        element: <CategoryDetails></CategoryDetails>,
        loader: ({ params }) =>
          fetch(
            `http://backend-orcin-ten-82.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
