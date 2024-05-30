import useAuth from "./useAuth";
import { findAdmin } from "../utils/api";
import { useState, useEffect } from "react";

const useAdmin = () => {
  const [Auth] = useAuth();
  const [isAdmin, setIsAdmin] = useState(null);
  const [isAdminLoading, setIsAdminLoading] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (Auth) {
        const { user, isAdminLoading: authLoading } = Auth;
        if (!authLoading && user) {
          const userEmail = user.email;
          setIsAdminLoading(true);
          try {
            const adminStatus = await findAdmin(userEmail);
            setIsAdmin(adminStatus);
            setIsAdminLoading(false);
          } catch (error) {
            console.error("Error checking admin status:", error);
          }
        }
      }
    };

    checkAdminStatus();
  }, [Auth]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
