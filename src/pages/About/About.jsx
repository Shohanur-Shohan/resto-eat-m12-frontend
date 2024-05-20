import PageHeading from "../../components/PageHeading";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <main className="relative">
      <Helmet>
        <title>Resto Eat | About</title>
      </Helmet>
      <PageHeading
        heading={"About Us"}
        // subHeading={"Would you like to try a dish?"}
      />
    </main>
  );
};

export default About;
