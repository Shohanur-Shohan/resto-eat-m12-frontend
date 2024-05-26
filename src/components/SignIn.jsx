import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthPovider";
import { useLocation } from "react-router-dom";
import { sendUserToDB } from "../utils/api";

const SignIn = () => {
  const { setLoading, setUser, userSignIn, user, googleSignin } =
    useContext(AuthContext);
  const [eye, setEye] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const from = location?.state?.from;

  const handleSignin = (data) => {
    try {
      const email = data?.email;
      const password = data?.password;
      const user_captcha_value = data?.recapcha;
      if (validateCaptcha(user_captcha_value) === true) {
        userSignIn(email, password)
          .then((userCredential) => {
            if (userCredential) {
              const currentUser = userCredential.user;
              setUser(currentUser);
              setLoading(false);
              toast.success("Login Success");
              navigate(location?.state ? from : "/");
            }
          })
          .catch((error) => {
            console.log(error.message);
            toast.error("Login failed!");
          });
      } else {
        toast.error("Captcha Verification Failed!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  //google
  const handleGoogleSignin = () => {
    googleSignin()
      .then(async (result) => {
        const currentUser = result.user;
        // console.log(currentUser);
        const userInfo = {
          userName: currentUser?.displayName,
          userEmail: currentUser?.email,
        };
        if (currentUser) {
          const result = await sendUserToDB(userInfo);
          // console.log(result);
          if (result?.insertedId) {
            setLoading(false);
            toast.success("Account created successfully!");
            navigate(location?.state ? from : "/");
          } else if (result?.insertedId == null) {
            setLoading(false);
            toast.success("Login success!");
            navigate(location?.state ? from : "/");
          }
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error("Login failed!");
      });
  };

  return (
    <section className="max-w-[1200px] min-h-[90vh] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-[80px] md:py-[100px] flex items-center justify-center">
      <div className="grid items-center justify-between w-full grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[20px] lg:gap-[60px]">
        <div className="order-2 col-span-1 mt-6 md:order-1 md:mt-0">
          <img src="/assets/signup.png" alt="img" />
        </div>
        <div className="order-1 col-span-1 bg-white border border-gray-200 shadow-sm md:order-2 mt-7 rounded-xl mb-9 md:mb-0">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 ">Login</h1>
              <p className="mt-2 text-sm text-gray-600 ">
                Don{"'"}t have an account yet?{" "}
                <Link
                  className="font-medium text-[#F98C40] decoration-2 hover:underline "
                  to={"/register"}
                >
                  Sign up here
                </Link>
              </p>
            </div>
            <div className="mt-5">
              <button
                onClick={handleGoogleSignin}
                className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
              >
                <svg
                  className="w-4 h-auto"
                  width={46}
                  height={47}
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign in with Google
              </button>
              <div className="flex items-center py-3 text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
                Or
              </div>
              {/* Form */}
              <form onSubmit={handleSubmit(handleSignin)}>
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        {...register("email")}
                        className="block w-full px-4 py-3 text-sm border border-gray-200 shadow-sm bg-[#fff] rounded-lg focus:border-[#F98C40] focus:ring-[#F98C40]"
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label htmlFor="password" className="blocktext-sm">
                        Password
                      </label>
                      <div>
                        <a className="text-sm font-medium text-[#F98C40] decoration-2 underline">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type={`${eye ? "text" : "password"}`}
                        id="password"
                        name="password"
                        {...register("password")}
                        className="block w-full px-4 py-3 text-sm border border-gray-200 shadow-sm bg-[#fff] rounded-lg focus:border-[#F98C40] focus:ring-[#F98C40]"
                        required
                        placeholder=".........."
                      />
                      <div
                        className="absolute right-2 top-[30%]"
                        onClick={() => setEye(!eye)}
                      >
                        <img
                          className="w-5 h-5"
                          src={`${
                            eye
                              ? "/assets/eyeOpen.svg"
                              : "/assets/closedEye.svg"
                          }`}
                          alt="eye"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Form Group */}
                  {/* recapcha */}
                  <div>
                    <div className="relative">
                      <LoadCanvasTemplate />
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        id="recapcha"
                        name="recapcha"
                        required
                        {...register("recapcha")}
                        disabled={user ? true : false}
                        placeholder="Enter Code"
                        className="block w-full px-4 py-3 text-sm border border-gray-200 shadow-sm bg-[#fff] rounded-lg focus:border-[#F98C40] focus:ring-[#F98C40]"
                      />
                    </div>
                  </div>
                  {/* recapcha */}
                  {/* Checkbox */}
                  <div className="flex items-center">
                    <div className="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="shrink-0 mt-0.5 border-gray-200 rounded text-[#F98C40] focus:ring-[#F98C40]"
                      />
                    </div>
                    <div className="ms-3">
                      <label htmlFor="remember-me" className="text-sm">
                        Remember me
                      </label>
                    </div>
                  </div>
                  {/* End Checkbox */}
                  {!user && (
                    <button
                      disabled={user ? true : false}
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white hover:text-[#F98C40] transition-colors bg-[#F98C40] border border-[#F98C40] rounded-lg gap-x-2 hover:bg-transparent"
                    >
                      Login
                    </button>
                  )}
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
