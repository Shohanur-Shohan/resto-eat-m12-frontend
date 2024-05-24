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
  const totalPrice = data?.reduce((prevPrice, currentPrice) => {
    return prevPrice + currentPrice?.price;
  }, 0);

  return (
    <div className="px-2 sm:px-4 py-[50px] w-full min-h-[100vh] overflow-x-scroll sm:overflow-hidden">
      {/* Total Cart Price */}
      <div className="w-full mb-6">
        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {/* Card */}
          <div className="flex flex-col p-4 bg-white border shadow-sm gap-y-3 lg:gap-y-5 md:p-5 rounded-xl">
            <div className="inline-flex items-center justify-center">
              <span className="inline-block bg-green-500 rounded-full size-2 me-2" />
              <span className="text-xs font-semibold text-gray-600 uppercase">
                Total Orders
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl lg:text-5xl">
                {data.length || 0}
              </h3>
            </div>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col p-4 bg-white border shadow-sm gap-y-3 lg:gap-y-5 md:p-5 rounded-xl ">
            <div className="inline-flex items-center justify-center">
              <span className="inline-block bg-green-500 rounded-full size-2 me-2" />
              <span className="text-xs font-semibold text-gray-600 uppercase ">
                Total price
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl lg:text-5xl ">
                ${totalPrice || 0}
              </h3>
            </div>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex items-center justify-center p-4 bg-red-500 border shadow-sm cursor-pointer gap-y-3 lg:gap-y-5 md:p-5 rounded-xl">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl ">
              Pay Now
            </h1>
          </div>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Total Cart Price */}

      <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
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
