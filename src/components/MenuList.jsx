import MenuListItem from "./MenuListItem";
import Loader from "./Loaders/Loader";
import PropTypes from "prop-types";

const MenuList = ({ menu }) => {
  return (
    <>
      <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {menu === null ? (
          <Loader />
        ) : (
          menu.map((item) => {
            return <MenuListItem key={item?._id} data={item} />;
          })
        )}
      </ul>
    </>
  );
};

MenuList.propTypes = {
  menu: PropTypes.array,
};
export default MenuList;
