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
import { useRoutes } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Loader from "../components/Loaders/Loader";
import AddItems from "../pages/Dashboard/Admin/AddItems/AddItems";
import Payment from "../pages/Dashboard/User/Payment/Payment";
import ManageBookings from "../pages/Dashboard/Admin/ManageBookings/ManageBookings";

const AdminOrUser = () => {
  const [isAdmin, isAdminLoading] = useAdmin();

  // if (isAdminLoading) {
  //   return <Loader />;
  // }

  const adminRoutes = [
    { path: "", element: <AdminDashboard /> },
    { path: "add-items", element: <AddItems /> },
    { path: "manage-items", element: <ManageItems /> },
    { path: "manage-booking", element: <ManageBookings /> },
    { path: "all-users", element: <AllUsers /> },
  ];

  const userRoutes = [
    { path: "", element: <UserDashboard /> },
    { path: "reservation", element: <Reservation /> },
    { path: "payment-history", element: <PaymentHistory /> },
    { path: "my-cart", element: <MyCart /> },
    { path: "payment", element: <Payment /> },
    { path: "add-review", element: <AddReview /> },
    { path: "my-booking", element: <MyBooking /> },
  ];

  const routes = isAdmin?.role === "admin" ? adminRoutes : userRoutes;
  // const routes = userRoutes;

  return useRoutes(routes);
};

export default AdminOrUser;
