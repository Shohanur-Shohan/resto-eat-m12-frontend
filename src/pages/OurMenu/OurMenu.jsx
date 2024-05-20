import { useState } from "react";
import Heading from "../../components/Heading";
import MenuList from "../../components/MenuList";
import PageHeading from "../../components/PageHeading";
import { useEffect } from "react";
import InnerPageHeading from "../../components/InnerPageHeading";
import DessertSection from "./DessertSection";
import { Helmet } from "react-helmet-async";
import SaladSection from "./SaladSection";
import SoupSection from "./SoupSection";

const OurMenu = () => {
  const [menu, setMenu] = useState(null);

  const getMenu = async () => {
    const res = await fetch("menu.json");
    const result = await res.json();
    const featuredData = await result.filter(
      (item) => item.category === "offered"
    );
    setMenu(featuredData);
  };
  useEffect(() => {
    getMenu();
  }, []);
  //   console.log(menu);
  return (
    <main className="relative">
      <Helmet>
        <title>Resto Eat | Menu</title>
      </Helmet>
      <PageHeading
        heading={"OUR MENU"}
        subHeading={"Would you like to try a dish?"}
      />

      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 my-[40px] md:my-[50px]">
        <Heading title={"TODAY'S OFFER"} subTitle={"---Don't miss---"} />
        {/* //todays offer */}
        <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
          <MenuList menu={menu} />
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
        </div>
      </div>
      {/* //todays offer */}
      {/* desert */}
      <InnerPageHeading
        heading={"DESSERTS"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 my-[50px]">
        <Heading title={"Dessert Items"} subTitle={"---Don't miss---"} />
        <DessertSection />
      </div>
      {/* desert*/}
      {/*salad*/}
      <InnerPageHeading
        heading={"SALADS"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 my-[50px]">
        <Heading title={"Salad Items"} subTitle={"---Don't miss---"} />
        <SaladSection />
      </div>
      {/*salad*/}
      {/* soup */}
      <InnerPageHeading
        heading={"SOUPS"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 my-[50px]">
        <Heading title={"Soup Items"} subTitle={"---Don't miss---"} />
        <SoupSection />
      </div>
      {/* soup */}
    </main>
  );
};

export default OurMenu;
