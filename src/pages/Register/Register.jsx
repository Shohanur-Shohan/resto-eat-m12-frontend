import Header from "../../components/Header";
import SignUp from "../../components/SignUp";
import { Helmet } from "react-helmet-async";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Resto Eat | Register</title>
      </Helmet>
      <Header />
      <SignUp />
    </>
  );
};

export default Register;
