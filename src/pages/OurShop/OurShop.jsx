import { Helmet } from "react-helmet-async";
import PageHeading from "../../components/PageHeading";
import ItemGrid from "./ItemGrid";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../../components/Loaders/Loader";
import useAuth from "../../hooks/useAuth";
// import Loader from "../../components/Loaders/Loader";

const OurShop = () => {
  const [menu, setMenu] = useState(null);
  // const { loading } = useContext(AuthContext);
  const [loading] = useAuth();

  const getMenu = async (dish) => {
    const res = await fetch("menu.json");
    const result = await res.json();
    const featuredData = await result.filter((item) => item.category === dish);
    setMenu(featuredData);
  };
  useEffect(() => {
    (async () => {
      await getMenu("offered");
    })();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <Helmet>
        <title>Resto Eat | Shop</title>
      </Helmet>
      <PageHeading
        heading={"OUR SHOP"}
        subHeading={"Would you like to try a dish?"}
      />
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 my-[40px] md:my-[50px]">
        {/* tab */}
        {/* {menu === null ? (
          <Loader />
        ) : ( */}
        <div
          role="tablist"
          className="overflow-x-scroll sm:overflow-hidden tabs tabs-bordered"
        >
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Offers"
            onClick={() => getMenu("offered")}
            defaultChecked
          />
          <div role="tabpanel" className="py-10 tab-content">
            <ItemGrid menu={menu} />
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Salad"
            onClick={() => getMenu("salad")}
          />
          <div role="tabpanel" className="py-10 tab-content">
            <ItemGrid menu={menu} />
          </div>

          <input
            onClick={() => getMenu("pizza")}
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Pizza"
          />
          <div role="tabpane2" className="py-10 tab-content">
            <ItemGrid menu={menu} />
          </div>

          <input
            onClick={() => getMenu("soup")}
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Soups"
          />
          <div role="tabpane3" className="py-10 tab-content">
            <ItemGrid menu={menu} />
          </div>
          <input
            onClick={() => getMenu("dessert")}
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Desserts"
          />
          <div role="tabpane3" className="py-10 tab-content">
            <ItemGrid menu={menu} />
          </div>

          <input
            onClick={() => getMenu("drinks")}
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Drinks"
          />
          <div role="tabpane3" className="py-10 tab-content">
            <ItemGrid menu={menu} />
          </div>
        </div>
        {/* )} */}
        {/* tab */}
      </div>
    </main>
  );
};

export default OurShop;
