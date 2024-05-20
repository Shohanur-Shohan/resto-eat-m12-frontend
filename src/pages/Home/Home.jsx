import Featured from "../../components/Hero/Featured";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";
import Banner from "./Banner";
import Call from "./Call";
import Menu from "./Menu";
import Recommended from "./Recommended";

const Home = () => {
  return (
    <main>
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
