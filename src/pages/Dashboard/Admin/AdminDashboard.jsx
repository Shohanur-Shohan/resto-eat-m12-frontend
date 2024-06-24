import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { adminStats } from "../../../utils/api";
import Loader from "../../../components/Loaders/Loader";

const Dashboard = () => {
  const [Auth] = useAuth();

  const email = Auth?.user?.email;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allUsers", email],
    enabled: !!email,
    queryFn: async () => await adminStats(email),
  });
  
  if (Auth?.loading || isLoading) {
    return <Loader />;
  }

  // console.log(data);
  const {users, menus, orders, revenue} = data;

  return (
    <section className="w-full h-full">
      <Helmet>
        <title>Resto Eat | Dashboard</title>
      </Helmet>
      {/* dashboard */}
      {/* Grid */}
      <div className="grid gap-4 px-2 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:px-4 mt-[30px]">
        {/* Card */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl ">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs tracking-wide text-gray-500 uppercase ">
                Total users
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <svg
                    className="flex-shrink-0 text-gray-500 size-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <span
                    className="absolute z-10 invisible inline-block px-2 py-1 text-xs font-medium text-white transition-opacity bg-gray-900 rounded shadow-sm opacity-0 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible"
                    role="tooltip"
                  >
                    The number of daily users
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-1 gap-x-2">
              <h3 className="text-xl font-medium text-gray-800 sm:text-2xl">
                {users}
              </h3>
              <span className="flex items-center text-green-600 gap-x-1">
                <svg
                  className="self-center inline-block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="inline-block text-sm">1.7%</span>
              </span>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs tracking-wide text-gray-500 uppercase ">
                Products
              </p>
            </div>
            <div className="flex items-center mt-1 gap-x-2">
              <h3 className="text-xl font-medium text-gray-800 sm:text-2xl">
                {menus}+
              </h3>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs tracking-wide text-gray-500 uppercase ">
               Orders
              </p>
            </div>
            <div className="flex items-center mt-1 gap-x-2">
              <h3 className="text-xl font-medium text-gray-800 sm:text-2xl ">
                {orders}
              </h3>
              <span className="flex items-center text-red-600 gap-x-1">
                <svg
                  className="self-center inline-block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                  <polyline points="16 17 22 17 22 11" />
                </svg>
                <span className="inline-block text-sm">1.7%</span>
              </span>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs tracking-wide text-gray-500 uppercase ">
                Revenue
              </p>
            </div>
            <div className="flex items-center mt-1 gap-x-2">
              <h3 className="text-xl font-medium text-gray-800 sm:text-2xl ">
                ${revenue}
              </h3>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Grid */}

    </section>
  );
};

export default Dashboard;
