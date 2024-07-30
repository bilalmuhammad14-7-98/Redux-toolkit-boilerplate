import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Dashboard from "../views/Dashboard";
// import AboutUs from "../views/AboutUs";
import Home from "../screens/Home";
import ContactUs from "../screens/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
