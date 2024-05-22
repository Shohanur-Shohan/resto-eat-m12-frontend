import { useState } from "react";
import Heading from "../../components/Heading";
import MenuList from "../../components/MenuList";
import PageHeading from "../../components/PageHeading";
import { useEffect } from "react";
import InnerPageHeading from "../../components/InnerPageHeading";
import { Helmet } from "react-helmet-async";
import { allMenu } from "../../utils/api";
import Loader from "../../components/Loaders/Loader";

const OurMenu = () => {
  const [menu, setMenu] = useState(null);

  const getMenu = async () => {
    const result = await allMenu();
    // console.log(result, "menu");

    setMenu(result);
  };
  useEffect(() => {
    getMenu();
  }, []);
  // console.log(menu);

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
          {menu === null ? (
            <Loader />
          ) : (
            <MenuList data={menu} menu={"offered"} />
          )}
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
        {menu === null ? <Loader /> : <MenuList data={menu} menu={"dessert"} />}
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
        {menu === null ? <Loader /> : <MenuList data={menu} menu={"salad"} />}
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
        {menu === null ? <Loader /> : <MenuList data={menu} menu={"soup"} />}
      </div>
      {/* soup */}

      {/* pizza */}
      <InnerPageHeading
        heading={"PIZZA"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 my-[50px]">
        <Heading title={"Pizza Items"} subTitle={"---Don't miss---"} />
        {menu === null ? <Loader /> : <MenuList data={menu} menu={"pizza"} />}
      </div>
      {/* pizza */}
    </main>
  );
};

export default OurMenu;
