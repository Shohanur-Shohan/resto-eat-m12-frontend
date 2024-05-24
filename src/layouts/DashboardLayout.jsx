import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserSidebar from "../pages/Dashboard/User/UserSidebar";
import AdminSidebar from "../pages/Dashboard/Admin/AdminSidebar";

const DashboardLayout = () => {
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
                    <ul className="space-y-1.5">
                      <li>
                        <NavLink
                          to={"/dashboard"}
                          className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
                        >
                          <svg
                            className="flex-shrink-0 size-4"
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
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                          </svg>
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
                        >
                          <svg
                            className="flex-shrink-0 mt-0.5 size-4"
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
                            <circle cx={18} cy={15} r={3} />
                            <circle cx={9} cy={7} r={4} />
                            <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                            <path d="m21.7 16.4-.9-.3" />
                            <path d="m15.2 13.9-.9-.3" />
                            <path d="m16.6 18.7.3-.9" />
                            <path d="m19.1 12.2.3-.9" />
                            <path d="m19.6 18.7-.4-1" />
                            <path d="m16.8 12.3-.4-1" />
                            <path d="m14.3 16.6 1-.4" />
                            <path d="m20.7 13.8 1-.4" />
                          </svg>
                          Account
                        </button>
                      </li>
                    </ul>
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
                      src={`/assets/noProfile.svg`}
                    />
                  </div>
                </div>
                {/* content */}
                <div className="p-2 bg-white rounded-lg shadow-md dropdown-content duration min-w-60">
                  <div className="px-5 py-3 -m-2 bg-gray-100 rounded-t-lg ">
                    <p className="text-sm text-gray-500 ">Signed in as</p>
                    <p className="text-sm font-medium text-gray-800 ">
                      james@site.com
                    </p>
                  </div>
                  <div className="py-2 mt-2 first:pt-0 last:pb-0">
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   ">
                      <svg
                        className="flex-shrink-0 size-4"
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      Team Account
                    </a>
                  </div>
                </div>
                {/* content */}
              </div>
              {/* avatar */}
            </div>
          </div>
        </nav>
      </header>
      {/* Sidebar start*/}
      <UserSidebar />
      {/* <AdminSidebar /> */}
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
