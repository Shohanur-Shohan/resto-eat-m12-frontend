import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import Loader from "../../../../components/Loaders/Loader";
import ManageItemsItem from "./ManageItemsItem";
import { allMenu } from "../../../../utils/api";

const ManageItems = () => {
  const [Auth] = useAuth();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => await allMenu(),
  });
  if (Auth?.loading || isLoading) {
    return <Loader />;
  }
  // console.log(data);
  return (
    <>
      <div className="px-2 sm:px-4 py-[50px] w-full min-h-[100vh] ">
        <div className="w-full overflow-x-scroll sm:overflow-x-hidden">
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="p-4"></th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Update
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((recipe, index) => {
                return (
                  <ManageItemsItem
                    key={recipe?._id}
                    index={index}
                    data={recipe}
                    refetch={refetch}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageItems;
