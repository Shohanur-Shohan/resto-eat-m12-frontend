import { Helmet } from "react-helmet-async";
import Testimonials from "../../components/Testimonials/Testimonials";
import PageHeading from "../../components/PageHeading";
import Heading from "../../components/Heading";
import Team from "./Team/Team";

const About = () => {
  return (
    <main>
      <Helmet>
        <title>Kinsley-Hotel | About</title>
      </Helmet>
      <PageHeading heading={"About Us"} />

      <div className="w-full bg-[#F2FFFF]  py-[100px] px-2 sm:px-4">
        <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4">
          <Heading title={"Our awesome Team "} subTitle={"Meet our chefs"} />
          <Team />
          <Testimonials />
        </div>
      </div>
    </main>
  );
};

export default About;
