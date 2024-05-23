import useCarts from "../hooks/useCarts";

const CartBtn = () => {
  const [data, isLoading] = useCarts();
  return (
    <div className="relative mr-2 cursor-pointer">
      <div className="absolute t-0 left-3">
        <p className="flex items-center justify-center w-2 h-2 p-[0.6rem] sm:p-3 text-xs text-white bg-[#F98D40] rounded-full">
          {isLoading ? "0" : data.length}
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 mt-3 sm:w-6 sm:h-6"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d="M1 1a1 1 0 1 0 0 2h1.78a.694.694 35.784 0 1 .657.474l3.297 9.893c.147.44.165.912.053 1.362l-.271 1.087C6.117 17.41 7.358 19 9 19h12a1 1 0 1 0 0-2H9c-.39 0-.64-.32-.545-.697l.205-.818A.64.64 142.028 0 1 9.28 15H20a1 1 0 0 0 .95-.684l2.665-8A1 1 0 0 0 22.666 5H6.555a.694.694 35.783 0 1-.658-.474l-.948-2.842A1 1 0 0 0 4 1zm7 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
            paintOrder="fill markers stroke"
            fill="#ffffff"
          />
        </g>
      </svg>
    </div>
  );
};

export default CartBtn;
