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
// import useAuth from "../hooks/useAuth";
import { useRoutes } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Loader from "../components/Loaders/Loader";

const AdminOrUser = () => {
  const [isAdmin, isAdminLoading] = useAdmin();

  if (isAdminLoading) {
    return <Loader />;
  }
  // if (!isAdminLoading && isAdmin) {
  //   console.log(isAdmin);
  // }

  const adminRoutes = [
    { path: "", element: <AdminDashboard /> },
    { path: "reservation", element: <Reservation /> },
    { path: "manage-items", element: <ManageItems /> },
    { path: "manage-booking", element: <MyCart /> },
    { path: "all-users", element: <AllUsers /> },
  ];

  const userRoutes = [
    { path: "", element: <UserDashboard /> },
    { path: "reservation", element: <Reservation /> },
    { path: "payment-history", element: <PaymentHistory /> },
    { path: "my-cart", element: <MyCart /> },
    { path: "add-review", element: <AddReview /> },
    { path: "my-booking", element: <MyBooking /> },
  ];

  const routes = isAdmin?.role === "admin" ? adminRoutes : userRoutes;
  // const routes = userRoutes;

  return useRoutes(routes);
};

export default AdminOrUser;
