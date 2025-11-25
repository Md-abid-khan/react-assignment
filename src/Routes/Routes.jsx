import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import { Component } from "react";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch("DoctorJSON.json"),
                Component: Home,



            },
            {
                path: "/doctordetails/:id",
                loader: () => fetch("DoctorJSON.json"),
                Component: DoctorDetails
            }
        ]
    },
]);

export default router;