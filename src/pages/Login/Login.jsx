import Header from "../../components/Header";
import SignIn from "../../components/SignIn";
import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Resto Eat | Login</title>
      </Helmet>
      <Header />
      <SignIn />
    </>
  );
};

export default Login;
