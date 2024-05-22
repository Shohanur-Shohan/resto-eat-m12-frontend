import MenuListItem from "./MenuListItem";
import Loader from "./Loaders/Loader";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MenuList = ({ menu, data }) => {
  const [filteredMenu, setFilteredMenu] = useState(null);

  useEffect(() => {
    const filterMenu = async () => {
      if (data !== null) {
        const result = data.filter((item) => item.category === menu);
        setFilteredMenu(result);
      }
    };

    filterMenu();
  }, [data, menu]);

  return (
    <>
      <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {filteredMenu === null ? (
          <Loader />
        ) : (
          filteredMenu.map((item) => {
            return <MenuListItem key={item?._id} data={item} />;
          })
        )}
      </ul>
      <div className="flex justify-center w-full mt-[50px]">
        <button className="">
          <Link to={`/shop`} className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#F98D40] rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50" />
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#F98D40] group-hover:-rotate-180 ease" />
              <span className="relative">Order Now</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#F98D40] rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            />
          </Link>
        </button>
      </div>
    </>
  );
};

MenuList.propTypes = {
  data: PropTypes.array,
  menu: PropTypes.string,
};
export default MenuList;
