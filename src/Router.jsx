import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Componant/Main/Main";
import Home from "./Componant/Home/Home";
import CollageDetails from "./Componant/Home/CollageDetails";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/collageDetails",
            element:<CollageDetails></CollageDetails>
        },
      ]
    },
  ]);