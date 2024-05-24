import Loader from "../../../../components/Loaders/Loader";
import useAuth from "../../../../hooks/useAuth";
import useCarts from "../../../../hooks/useCarts";
import TableItem from "./TableItem";

const MyCart = () => {
  const { user, loading } = useAuth();
  const [data, isLoading, refetch] = useCarts();
  if (loading || isLoading) {
    return <Loader />;
  }
  // console.log(data);
  return (
    <div className="px-2 sm:px-4 py-[50px] w-full min-h-[100vh] overflow-x-scroll sm:overflow-hidden">
      <table className="w-full mx-auto text-sm text-left text-gray-500 rtl:text-right">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return <TableItem key={item?._id} item={item} refetch={refetch} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyCart;
