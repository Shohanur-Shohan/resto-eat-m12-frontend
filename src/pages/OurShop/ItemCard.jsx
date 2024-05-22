import PropTypes from "prop-types";

const ItemCard = ({ data }) => {
  const { _id, image, name, price, recipe } = data;

  return (
    <>
      <div className="col-span-1 bg-white border border-gray-200 rounded-lg shadow ">
        <div className={`${price ? "relative" : ""}`}>
          <img className="w-full rounded-t-lg" src={image} alt="image" />
          {price && (
            <div className="absolute top-2 right-2 py-1 px-5 bg-white text-[#F98C40]">
              ${price}
            </div>
          )}
        </div>
        <div className="p-5">
          <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-1">
              {name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 line-clamp-2">
            {recipe}
          </p>
          <button className="mt-2">
            <a className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#F98D40] rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50" />
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#F98D40] group-hover:-rotate-180 ease" />
                <span className="relative">Add To Cart</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#F98D40] rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              />
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
ItemCard.propTypes = {
  data: PropTypes.object,
};
export default ItemCard;
