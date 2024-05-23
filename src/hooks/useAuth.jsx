import { useContext } from "react";
import { AuthContext } from "../providers/AuthPovider";

const useAuth = () => {
  const Auth = useContext(AuthContext);
  return Auth;
};

export default useAuth;
