import { createBrowserRouter } from "react-router-dom"
import Error from "../pages/Error/Error"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home/Home"
import Contact from "../pages/Contact/Contact"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import About from "../pages/About/About"

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
        path: "/contact",
        element: <Contact />,
      },
    ],
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
])

export default Router