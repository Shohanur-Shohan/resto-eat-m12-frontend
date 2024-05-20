import Heading from "../../components/Heading";
import RecommendedCard from "../../components/Hero/RecommendedCard";

const Recommended = () => {
  return (
    <section className="w-full my-[80px] md:my-[100px]">
      <Heading subTitle={"---Should Try---"} title={"CHEF RECOMMENDS"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 items-center justify-center max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
        <RecommendedCard
          image={"/assets/recommended1.png"}
          title={"Caeser Salad"}
          subTitle={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}
        />
        <RecommendedCard
          image={"/assets/recommended1.png"}
          title={"Caeser Salad"}
          subTitle={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}
        />
        <RecommendedCard
          image={"/assets/recommended1.png"}
          title={"Caeser Salad"}
          subTitle={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}
        />
      </div>
    </section>
  );
};

export default Recommended;
