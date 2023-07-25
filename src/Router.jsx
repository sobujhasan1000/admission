import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Componant/Main/Main";
import Home from "./Componant/Home/Home";
import CollageDetails from "./Componant/Home/CollageDetails";
import Allcollage from "./Componant/NavRoute/Allcollage";
import Admission from "./Componant/NavRoute/Admission";
import Mycollage from "./Componant/NavRoute/Mycollage";
import AdmissionForm from "./Componant/NavRoute/AdmissionF";
import Singin from "./Componant/SingIn/Singin";
import Login from "./Componant/SingIn/Login";
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
            path:"/collage/:id",
            element:<CollageDetails></CollageDetails>,
            // loader:({params})=>fetch(`http://localhost:5000/collage/${params.id}`),
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
        {
            path:"/form/:id",
            element:<AdmissionForm></AdmissionForm>,

        },
        {
            path:"/singin",
            element:<Singin></Singin>,

        },
        {
            path:"/login",
            element:<Login></Login>,

        },
      ]
    },
  ]);