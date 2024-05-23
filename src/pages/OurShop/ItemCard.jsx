import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { addToCart } from "../../utils/api";
const ItemCard = ({ data }) => {
  const { _id, image, name, price, recipe } = data;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = async () => {
    if (user && user?.email) {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Add To Cart",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const cartItem = {
            menuID: _id,
            userEmail: user?.email,
            name,
            image,
            price,
          };
          const result = await addToCart(cartItem);
          if (result?.insertedId) {
            Swal.fire({
              title: "Item added to cart!",
              icon: "success",
            });
          }
        }
      });
    } else {
      navigate("/login", { state: { from: location.pathname } });
    }
  };

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
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-1">
              {name}
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 line-clamp-2">
            {recipe}
          </p>
          <button className="relative inline-block mt-2 text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#F98D40] rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50" />
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#F98D40] group-hover:-rotate-180 ease" />
              <span onClick={() => handleAddToCart()} className="relative">
                Add To Cart
              </span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#F98D40] rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            />
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
