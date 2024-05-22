import { Helmet } from "react-helmet-async";
// import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Error = () => {
  return (
    <>
      <Helmet>
        <title>Kinsley-Hotel | Error</title>
      </Helmet>
      <Header />
      <div className="bg-[#ECFAFB] min-h-[100vh] flex items-center justify-center w-full">
        <div>
          <img
            src="/assets/error.png"
            className="md:max-w-[700px] mx-auto px-4"
            alt="img"
          />
          <div className="flex items-center justify-center max-w-sm mx-auto text-center ">
            <div>
              <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
                Page not found
              </h1>
              <p className="mt-4 text-gray-500 ">
                The page you are looking for doesnt exist.
              </p>
              <div className="flex justify-center w-full mt-6 items- gap-x-3 shrink-0 sm:w-auto">
                <Link
                  to={"/"}
                  className="bg-[#3B61DD] text-[15px] text-white tracking-[2px] px-[20px] sm:px-[30px] py-[14px] z-20 hover:bg-[#4470FE] rounded-full"
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
