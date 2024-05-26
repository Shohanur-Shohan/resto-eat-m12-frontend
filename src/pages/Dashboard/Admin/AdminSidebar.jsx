import { Link } from "react-router-dom";
import AdminNavLinks from "./AdminNavLinks";

const AdminSidebar = () => {
  return (
    <>
      <div className="-translate-x-full transition-all duration-300 transform w-[260px] hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0">
        <div className="px-8 pt-4">
          {/* Logo */}
          <Link
            to={"/"}
            className="flex-none inline-block text-xl font-semibold rounded-xl focus:outline-none focus:opacity-80"
          >
            <img src="/assets/logo.png" className="max-w-[150px]" alt="logo" />
          </Link>
          {/* End Logo */}
        </div>
        <nav className="flex flex-col flex-wrap w-full p-6">
          <AdminNavLinks />
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;
