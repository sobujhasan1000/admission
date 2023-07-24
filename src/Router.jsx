import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Componant/Main/Main";
import Home from "./Componant/Home/Home";
import CollageDetails from "./Componant/Home/CollageDetails";
import Allcollage from "./Componant/NavRoute/Allcollage";
import Admission from "./Componant/NavRoute/Admission";
import Mycollage from "./Componant/NavRoute/Mycollage";
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
        {
            path:"/allcollage",
            element:<Allcollage></Allcollage>
        },
        {
            path:"/admission",
            element:<Admission></Admission>
        },
        {
            path:"/mycollage",
            element:<Mycollage></Mycollage>
        },
      ]
    },
  ]);