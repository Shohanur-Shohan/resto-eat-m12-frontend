import { useContext } from "react";
import Featured from "../../components/Hero/Featured";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";
import { AuthContext } from "../../providers/AuthPovider";
import Banner from "./Banner";
import Call from "./Call";
import Menu from "./Menu";
import Recommended from "./Recommended";
import { Helmet } from "react-helmet-async";
import Loader from "../../components/Loaders/Loader";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loader />;
  }
  return (
    <main>
      <Helmet>
        <title>Resto Eat | Home</title>
      </Helmet>
      <Hero />
      <Featured />
      <Banner />
      <Menu />
      <Call />
      <Recommended />
      <Testimonials />
    </main>
  );
};

export default Home;
