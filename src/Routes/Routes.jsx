import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";


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
                Component: Home
            }
        ]
    },
]);

export default router;