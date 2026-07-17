import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<NotFound></NotFound>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
        }
    ]
  },
]);