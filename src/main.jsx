import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import router from './Routes/Routes.jsx';
import { ToastContainer, toast } from 'react-toastify';



// import { createBrowserRouter } from "react-router";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello World</div>,
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </Suspense>
  </StrictMode>,
)
