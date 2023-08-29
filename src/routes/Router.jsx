import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("services.json"),
      },
      {
        path: "service/:serviceId",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.serviceId}`
          ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
