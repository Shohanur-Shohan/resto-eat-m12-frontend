import { Outlet } from "react-router-dom";
import UserSidebar from "../pages/Dashboard/User/UserSidebar";
import AdminSidebar from "../pages/Dashboard/Admin/AdminSidebar";
// import useAuth from "../hooks/useAuth";
import AdminNavLinks from "../pages/Dashboard/Admin/AdminNavLinks";
import UserNavLinks from "../pages/Dashboard/User/UserNavLinks";
import toast from "react-hot-toast";
import AvatarLoader from "../components/Loaders/AvatarLoader";
import useAdmin from "../hooks/useAdmin";
import Loader from "../components/Loaders/Loader";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthPovider";
import { useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const navigation = useNavigate();

  if (loading || isAdminLoading) {
    return <Loader />;
  }

  if (user === null) {
    navigation("/login");
  }

  const handlelogOut = () => {
    logOut();
    toast.success("Logout Success");
    navigation("/");
  };

  return (
    <main className="">
      <header className="z-[48] bg-white border-b text-sm py-2.5 sm:py-4">
        <nav
          className="flex items-center w-full px-4 mx-auto basis-full sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center gap-4 lg:hidden">
            {/* navicon */}
            {/* drawer */}
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="block px-3 py-2 text-xs text-gray-500 border border-gray-200 rounded-lg lg:hidden hover:text-gray-600 drawer-button"
                >
                  <img
                    src="/assets/dashboardNav.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                </label>
                {/*  */}
              </div>
              <div className="drawer-side w-fit">
                <label htmlFor="my-drawer" aria-label="close sidebar"></label>
                <ul className="w-64 min-h-full sm:w-72 bg-base-200">
                  <nav className="flex flex-col flex-wrap w-full p-6">
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    >
                      <img
                        src="/assets/closeBtn.svg"
                        className="w-8 h-8 mb-8"
                        alt="icon"
                      />
                    </label>
                    {/* small screen side navbar */}

                    {isAdmin?.role === "admin" ? (
                      <AdminNavLinks isAdminLoading={isAdminLoading} />
                    ) : (
                      <UserNavLinks isAdminLoading={isAdminLoading} />
                    )}
                    {/* <UserNavLinks /> */}
                    {/* small screen side navbar */}
                  </nav>
                </ul>
              </div>
            </div>
            {/* drawer */}
            {/* navicon */}
          </div>
          <div className="flex items-center justify-end w-full ms-auto sm:gap-x-3 sm:order-3">
            <div className="flex items-center justify-end">
              {/* notification */}
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
              >
                <svg
                  className="flex-shrink-0 size-4 sm:size-[1.2rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </button>
              {/* notification */}

              {/* avatar */}
              {!loading && user && (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center justify-center rounded-full avatar"
                  >
                    <div className="w-[32px] sm:w-[40px] rounded-full">
                      <img
                        alt="avatar"
                        className="object cover "
                        src={`${user?.photoURL || "/assets/noProfile.svg"} `}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[999] px-3 py-4 shadow bg-base-100 rounded-box w-52"
                  >
                    <li className="pl-2 my-2 text-left text-secondary">
                      Profile
                    </li>
                    <button
                      onClick={handlelogOut}
                      className="pl-2 my-2 text-left cursor-pointer text-secondary"
                    >
                      Logout
                    </button>
                  </ul>
                </div>
              )}

              {loading && <AvatarLoader />}
              {/* avatar */}
            </div>
          </div>
        </nav>
      </header>
      {/* Sidebar start*/}

      {isAdmin?.role === "admin" ? (
        <AdminSidebar isAdminLoading={isAdminLoading} />
      ) : (
        <UserSidebar isAdminLoading={isAdminLoading} />
      )}
      {/* <UserNavLinks /> */}

      {/* End Sidebar */}
      {/* Content */}
      <div className="w-full lg:ps-[16.2rem]">
        <Outlet></Outlet>
      </div>
      {/* End Content */}
    </main>
  );
};

export default DashboardLayout;
