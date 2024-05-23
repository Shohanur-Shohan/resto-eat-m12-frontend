import { useState } from "react";
import Heading from "../../components/Heading";
import MenuList from "../../components/MenuList";
import { useEffect } from "react";
import { allMenu } from "../../utils/api";

const Menu = () => {
  const [menu, setMenu] = useState(null);

  const getMenu = async () => {
    const result = await allMenu();
    // console.log(result, "menu");

    setMenu(result);
  };
  useEffect(() => {
    getMenu();
  }, []);

  return (
    <section className="w-full my-[80px] md:my-[100px]">
      <Heading title={"OUR MENU"} subTitle={"---Check it out---"} />
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
        <MenuList data={menu} menu={"popular"} />
      </div>
    </section>
  );
};

export default Menu;
