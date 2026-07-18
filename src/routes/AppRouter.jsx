import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Products from "../pages/Products/Products";


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
        },
        {
          path:"/about",
          Component: About,
        },
        {
          path:"/productDetails/:id",
          Component: ProductDetails,
        },
        {
          path:"/cart",
          Component: Cart,
        },
        {
           path:"/products",
           Component: Products,
        },
        {
          path:"/wishlist",
          element: <Products isWishlistMode={true} />,
        },
    ]
  },
]);