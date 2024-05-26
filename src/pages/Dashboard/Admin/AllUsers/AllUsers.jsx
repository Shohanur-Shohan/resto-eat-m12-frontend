import { useQuery } from "@tanstack/react-query";
import UserItem from "./UserItem";
import { allUsers } from "../../../../utils/api";
import useAuth from "../../../../hooks/useAuth";
import Loader from "../../../../components/Loaders/Loader";

const AllUsers = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => await allUsers(),
  });
  const { loading } = useAuth();
  if (loading || isLoading) {
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
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
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
              {data?.map((user, index) => {
                return (
                  <UserItem
                    key={user?._id}
                    index={index}
                    data={user}
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

export default AllUsers;
