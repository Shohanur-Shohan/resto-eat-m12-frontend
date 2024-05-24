import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import DashboardLayout from "../layouts/DashboardLayout";
// user
import UserDashboard from "../pages/Dashboard/User/UserDashboard";
import Reservation from "../pages/Dashboard/User/Reservation/Reservation";
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory/PaymentHistory";
import MyCart from "../pages/Dashboard/User/MyCart/MyCart";
import AddReview from "../pages/Dashboard/User/AddReview/AddReview";
import MyBooking from "../pages/Dashboard/User/MyBooking/MyBooking";
// admin
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import ManageItems from "../pages/Dashboard/Admin/ManageItems/ManageItems";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <OurShop />,
      },
      {
        path: "/menu",
        element: <OurMenu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "dashboard",
    errorElement: <Error />,
    element: <DashboardLayout />,
    // user dashboard
    children: [
      {
        path: "",
        element: <UserDashboard />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "add-review",
        element: <AddReview />,
      },
      {
        path: "my-booking",
        element: <MyBooking />,
      },
    ],
    // user dashboard
    // admin dashboard
    // children: [
    //   {
    //     path: "",
    //     element: <AdminDashboard />,
    //   },
    //   {
    //     path: "reservation",
    //     element: <Reservation />,
    //   },
    //   {
    //     path: "manage-items",
    //     element: <ManageItems />,
    //   },
    //   {
    //     path: "manage-booking",
    //     element: <MyCart />,
    //   },
    //   {
    //     path: "all-users",
    //     element: <AllUsers />,
    //   },
    // ],
    // admin dashboard
  },
  {
    path: "/login",
    errorElement: <Error />,
    element: <Login />,
  },
  {
    path: "/register",
    errorElement: <Error />,
    element: <Register />,
  },
]);

export default Router;
