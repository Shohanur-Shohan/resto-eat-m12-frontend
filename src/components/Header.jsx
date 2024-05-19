import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="w-full bg-primary shadow-md shadow-b-[5px] -shadow-spread-2">
      <div className="navbar  max-w-[1536px] mx-auto flex items-center px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
        <div className="navbar-start">
          <Link href={"/"} className="">
            <img
              src="/assets/logo.png"
              className="max-w-[110px] sm:max-w-[130px] md:max-w-[150px] xl:max-w-[180px] max-h-[55px]"
              alt="logo"
            />
          </Link>
        </div>
        {/* desktop-menu */}
        <div className="hidden navbar-center lg:flex">
          <ul className="flex gap-3 lg:gap-[25px] xl:gap-[30px]">
            <li>
              <NavLink
                to={"/"}
                className="text-secondary  font-medium hover:text-[#F98C40] transition-colors"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className="text-secondary  font-medium hover:text-[#F98C40] transition-colors"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="text-secondary  font-medium hover:text-[#F98C40] transition-colors"
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* desktop-menu */}

        <div className="navbar-end">
          <div className="flex items-center justify-center gap-2">
            {/* search & cart*/}
            <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full border-[1px] border-[#FF8D3F]">
              <img src="/assets/cart.svg" alt="img" />
            </div>
            {/* search & cart*/}
            {/* Profile */}
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
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[999] px-3 py-4 shadow bg-base-100 rounded-box w-52"
              >
                <li className="pl-2 my-2 text-left text-secondary">Profile</li>
                <button className="pl-2 my-2 text-left cursor-pointer text-secondary">
                  Logout
                </button>
              </ul>
            </div>
            {/* Profile */}

            <Link
              to={"/login"}
              className="hidden sm:flex px-4  py-[7px] sm:px-5 sm:py-[8px] xl:px-7 xl:py-[10px] bg-[#FF8D3F] hover:bg-transparent transition-colors border-[#FF8D3F] border rounded-full  font-medium text-white hover:text-[#FF8D3F]"
            >
              Login
            </Link>
          </div>

          {/* drawer */}
          <div className="drawer drawer-end w-fit">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button lg:hidden">
                <img
                  className="w-8 h-8 ml-1 sm:w-10 sm:h-10 sm:ml-2"
                  src="/assets/navicon.svg"
                  alt="icon"
                />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              {/* mobile */}
              <div>
                <Link href={"/"} className="">
                  <img
                    src="/assets/logo.webp"
                    className="max-w-[130px] md:max-w-[150px] xl:max-w-[180px]"
                    alt="logo"
                  />
                </Link>
              </div>
              <ul className="w-64 min-h-screen px-2 sm:w-72 right-2 bg-[#F2F2F2] text-secondary-content">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                >
                  <img
                    src="/assets/closeBtn.svg"
                    className="w-8 h-8 mt-2 mb-8"
                    alt="icon"
                  />
                </label>
                <li className="mb-5 ">
                  <NavLink
                    to={"/"}
                    className="my-1 text-[#1e1e1e] border border-transparent  font-medium hover:text-[#9ea18e] transition-colors"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="mb-5 ">
                  <NavLink
                    to={"/about"}
                    className="my-1 text-[#1e1e1e] border border-transparent  font-medium hover:text-[#9ea18e] transition-colors"
                  >
                    About
                  </NavLink>
                </li>
                <li className="mb-5 ">
                  <NavLink
                    to={"/contact"}
                    className="my-1 text-[#1e1e1e] border border-transparent  font-medium hover:text-[#9ea18e] transition-colors"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="mb-5 ">
                  <Link
                    to={"/login"}
                    className="sm:hidden text-center flex px-4 justify-center py-[7px] sm:px-5 sm:py-[8px] xl:px-7 xl:py-[10px] bg-transparent hover:bg-[#FF3811] transition-colors border-[#FF3811] border rounded-full  font-medium text-[#FF3811] hover:text-[#fff]"
                  >
                    Login
                  </Link>
                </li>
              </ul>
              {/* mobile */}
            </div>
          </div>
          {/* drawer */}
        </div>
      </div>
    </div>
  )
}

export default Header
