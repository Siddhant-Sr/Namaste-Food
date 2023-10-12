import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Offer from "./components/Offer"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Restaurant from "./components/Restaurant";

//Swiggy data

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[ {
      path: "/",
      element: <Body />
    },{
      path: "/about",
      element: <About />
    },
    {
      path: "/offers",
      element: <Offer />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/restaurants/:resId",
      element: <Restaurant />
    }
  ],
    errorElement: <Error />
    
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
