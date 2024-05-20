import SignUp from "../../components/SignUp";
import { Helmet } from "react-helmet-async";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Resto Eat | Register</title>
      </Helmet>
      <SignUp />
    </>
  );
};

export default Register;
