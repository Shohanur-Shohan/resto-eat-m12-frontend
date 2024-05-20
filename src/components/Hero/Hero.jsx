import HeroCard from "./HeroCard"

const Hero = () => {
  return (
    <section className="w-full relative h-[100vh] z-0">
      <div className="w-full h-full carousel">
        <HeroCard
          id={"slide1"}
          image={"/assets/hero1.jpg"}
          title={"We don't just cook, we thread you to delicacies..."}
          des={
            "Embark on a gastronomic journey like no other as we intricately weave flavors and textures into a tapestry of exquisite delicacies. Indulge in our culinary artistry that goes beyond mere cooking, captivating your senses and leaving you craving for more."
          }
          prev={"#slide3"}
          next={"#slide2"}
        />
        <HeroCard
          id={"slide2"}
          image={"/assets/hero2.jpg"}
          title={"We don't just cook, we thread you to delicacies..."}
          des={
            "Embark on a gastronomic journey like no other as we intricately weave flavors and textures into a tapestry of exquisite delicacies. Indulge in our culinary artistry that goes beyond mere cooking, captivating your senses and leaving you craving for more."
          }
          prev={"#slide1"}
          next={"#slide3"}
        />
        <HeroCard
          id={"slide3"}
          image={"/assets/hero3.jpg"}
          title={"We don't just cook, we thread you to delicacies..."}
          des={
            "Embark on a gastronomic journey like no other as we intricately weave flavors and textures into a tapestry of exquisite delicacies. Indulge in our culinary artistry that goes beyond mere cooking, captivating your senses and leaving you craving for more."
          }
          prev={"#slide2"}
          next={"#slide1"}
        />

        {/*  */}
      </div>
    </section>
  )
}

export default Hero
