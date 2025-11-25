import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import { Component } from "react";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import FinalPage from "../Pages/ChartBookmark/FinalPage";
import BLog from "../Pages/Blogs/BLog";
import ContactUs from "../Pages/ContactUs/ContactUs";



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
            },
            {
                path: "/bookmarks",
                loader: () => fetch("DoctorJSON.json"),
                Component: FinalPage
            },
            {
                path: "/finalpage",
                 loader: () => fetch("DoctorJSON.json"),
                Component : FinalPage
            },
            {
                path:"/blogs",
                loader: ()=> fetch("Blog.json"),
                Component: BLog
            },
            {
                path: "/contactUs",
                Component: ContactUs
            }
        ]
    },
]);

export default router;