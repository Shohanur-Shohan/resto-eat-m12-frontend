import PropTypes from "prop-types"

const MenuListItem = ({ data }) => {
  const { _id, image, name, category, price, recipe } = data
  return (
    <>
      <li className="col-span-1 py-3 sm:py-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="w-[48px] h-[48px] rounded-full"
              src={image}
              alt="image"
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-[18px] md:text-[20px] font-medium text-gray-900 truncate">
              {name}
            </p>
            <p className="pr-4 text-sm text-gray-500 truncate line-clamp-1">
              {recipe}
            </p>
          </div>
          <div className="inline-flex font-medium text-[20px] items-center ml-3 text-[#BB8506]">
            ${price}
          </div>
        </div>
      </li>
    </>
  )
}
MenuListItem.propTypes = {
  data: PropTypes.object,
}
export default MenuListItem
