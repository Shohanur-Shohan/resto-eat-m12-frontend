import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ManageItemsItem = ({ data, refetch, index }) => {
  const { _id, name, image, price } = data;
  const [modal, setModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleDelete = async (id) => {
    try {
      //   Swal.fire({
      //     title: "Are you sure?",
      //     text: "You won't be able to revert this!",
      //     icon: "warning",
      //     showCancelButton: true,
      //     confirmButtonColor: "#3085d6",
      //     cancelButtonColor: "#d33",
      //     confirmButtonText: "Yes, delete it!",
      //   }).then(async (result) => {
      //     if (result.isConfirmed) {
      //       const result = await deleteUser(id);

      //       if (result.deletedCount === 1) {
      //         Swal.fire({
      //           title: "Deleted!",
      //           text: "User has been deleted.",
      //           icon: "success",
      //         });
      //       }
      //     }
      //   });
      console.log(id);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  //update role
  //   const handleRole = async () => {
  //     console.log("hello")
  //   };

  return (
    <>
      <tr className="bg-white border-b hover:bg-gray-50 ">
        <td className="w-4 p-4">
          <p>{index}</p>
        </td>
        <td className="p-4">
          <img
            src={image}
            className="w-16 max-w-full max-h-full md:w-32"
            alt="Apple Watch"
          />
        </td>
        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4 font-medium text-green-500">${price}</td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="font-medium text-blue-600 underline"
            >
              Edit
            </button>
          </div>
          {/* modal */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="label">
                <span className="label-text">Change user role:</span>
              </div>

              <div className={`${modal === true ? "hidden" : "block"}`}>
                <select
                  name="role"
                  {...register("role")}
                  className="w-full max-w-xs select select-bordered"
                >
                  <option disabled>Role</option>
                  <option value={"user"}>User</option>
                  <option value={"admin"}>Admin</option>
                </select>
                <button
                  onClick={handleSubmit()}
                  className="block h-12 px-6 mt-4 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
                >
                  Update
                </button>
              </div>
            </div>
          </dialog>
          {/* modal */}
        </td>

        <td className="px-6 py-4">
          <button
            onClick={() => handleDelete(_id)}
            className="font-medium text-blue-600 hover:underline"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
ManageItemsItem.propTypes = {
  index: PropTypes.number,
  data: PropTypes.object,
  refetch: PropTypes.func,
};
export default ManageItemsItem;
