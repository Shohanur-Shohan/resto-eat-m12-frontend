import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { deleteUser } from "../../../../utils/api";
import Swal from "sweetalert2";

const UserItem = ({ index, data, refetch }) => {
  const { _id, userName, userEmail } = data;
  const handleDelete = async (id) => {
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
          const result = await deleteUser(id);

          if (result.deletedCount === 1) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
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
        <td className="w-4 p-4">
          <p>{index}</p>
        </td>
        <td className="px-6 py-4">{userName}</td>
        <td className="px-6 py-4">{userEmail}</td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> User
          </div>
        </td>
        <td className="px-6 py-4">
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="font-medium text-blue-600 hover:underline"
          >
            Edit
          </button>
          {/* modal */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="text-lg font-bold">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
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
UserItem.propTypes = {
  index: PropTypes.number,
  data: PropTypes.object,
  refetch: PropTypes.func,
};
export default UserItem;
