import { useEffect } from "react";
import MenuList from "../../components/MenuList";
import { useState } from "react";

const DessertSection = () => {
  const [desertLists, setDesertLists] = useState(null);

  const getMenu = async () => {
    const res = await fetch("menu.json");
    const result = await res.json();
    const desertData = await result.filter(
      (item) => item.category === "dessert"
    );
    setDesertLists(desertData);
  };
  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <MenuList menu={desertLists} />
      <div className="flex justify-center w-full mt-[50px]">
        <button className="">
          <a className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#F98D40] rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50" />
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#F98D40] group-hover:-rotate-180 ease" />
              <span className="relative">Order Now</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#F98D40] rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            />
          </a>
        </button>
      </div>
    </>
  );
};

export default DessertSection;
