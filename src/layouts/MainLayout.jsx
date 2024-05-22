import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration
        getKey={(location, matches) => {
          const paths = ["/home", "/notifications"];
          return paths.includes(location.pathname)
            ? // home and notifications restore by pathname
              location.pathname
            : // everything else by location like the browser
              location.key;
        }}
      />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
