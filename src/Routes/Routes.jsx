import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllartandCraft from "../Pages/AllartandCraft/AllartandCraft";
import AddartandCraft from "../Pages/AddartandCraft/AddartandCraft";
import MyartandCraft from "../Pages/MyartandCraft/MyartandCraft";
import SignUp from "../Pages/SignUp/SignUp"
import LogIn from "../Pages/LogIn/LogIn";
import DetailsPage from "../Components/DetailsPage/DetailsPage";
import ArtandCraftCategory from "../Pages/ArtandCraftCategory/ArtandCraftCategory";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Profile from "../Pages/Profile/Profile";
import UpdateItem from "../Components/UpdateItem/UpdateItem";
import CategorySinglePage from "../Components/CategorySinglePage/CategorySinglePage";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('https://art-craft-server-side-three.vercel.app/craftitems')
        },
        {
            path: "/allartandcraft",
            element: <AllartandCraft></AllartandCraft>,
        },
        {
            path: "/addartandcraft",
            element: <PrivateRoutes><AddartandCraft></AddartandCraft></PrivateRoutes>
        },
        {
            path: "/myartandcraft",
            element: <PrivateRoutes><MyartandCraft></MyartandCraft>,</PrivateRoutes>
            
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/login",
            element: <LogIn></LogIn>
        },
        {
            path: "/details/:id",
            element: <PrivateRoutes><DetailsPage></DetailsPage></PrivateRoutes>
        },
        {
            path: "/updateitem/:id",
            element: <UpdateItem></UpdateItem>
        },
        {
            path: "/artandcraftCategory",
            element: <ArtandCraftCategory></ArtandCraftCategory>,
        },
        {
            path: "/categorysinglepage/:id",
            element: <CategorySinglePage></CategorySinglePage>
        },
        {
            path: "/updateProfile",
            element: <UpdateProfile></UpdateProfile>
        },
        {
            path: "/profile",
            element: <Profile></Profile>
        }
    ]
  },
]);

export default router;