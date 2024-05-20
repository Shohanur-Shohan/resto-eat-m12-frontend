import Featured from "../../components/Hero/Featured";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";
import Banner from "./Banner";
import Call from "./Call";
import Menu from "./Menu";
import Recommended from "./Recommended";
import { Helmet } from "react-helmet-async";

const Home = () => {
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
