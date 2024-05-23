import PropTypes from "prop-types";
import ItemCard from "./ItemCard";

const ItemGrid = ({ menu }) => {
  return (
    <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
      {menu?.map((item) => {
        return <ItemCard key={item?._id} data={item} />;
      })}
    </div>
  );
};
ItemGrid.propTypes = {
  menu: PropTypes.array,
};
export default ItemGrid;
