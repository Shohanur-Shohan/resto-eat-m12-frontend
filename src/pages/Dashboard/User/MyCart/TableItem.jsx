import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { deleteCartItem } from "../../../../utils/api";

const TableItem = ({ item, refetch }) => {
  const { _id, name, image, menuID, UserEmail, price } = item;

  const handleRemove = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await deleteCartItem(id);
          if (res.deletedCount === 1) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          } else {
            Swal.fire({
              title: "Sometthing went wrong!",
              text: "Item can't be deleted",
              icon: "error",
            });
          }
        }
      });
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <>
      <tr className="bg-white border-b hover:bg-gray-50 ">
        <td className="p-4">
          <img
            src={image}
            className="w-16 max-w-full max-h-full rounded-md md:w-32"
            alt="Apple Watch"
          />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 ">{name}</td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button
              className="inline-flex items-center justify-center w-6 h-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full me-3 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
              type="button"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h16"
                />
              </svg>
            </button>
            <div>
              <input
                type="number"
                className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1      "
                placeholder={1}
                required=""
              />
            </div>
            <button
              className="inline-flex items-center justify-center w-6 h-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full ms-3 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
              type="button"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 ">${price}</td>
        <td className="px-6 py-4">
          <button
            onClick={() => handleRemove(_id)}
            className="font-medium text-red-600 hover:underline"
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};
TableItem.propTypes = {
  item: PropTypes.object,
  refetch: PropTypes.func,
};
export default TableItem;
