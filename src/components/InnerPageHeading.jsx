const InnerPageHeading = ({ heading, subHeading }) => {
  return (
    <section className="relative z-0 w-full px-[20px] pt-[80px] pb-[30px] md:px-[70px] lg:px-[100px] md:pt-[80px] md:pb-[60px] lg:pt-[150px] lg:pb-[100px] bg-[url('/assets/banner.png')] object-cover bg-no-repeat bg-cover bg-center">
      <div className="absolute top-0 left-0 z-[10] w-full h-full bg-overlay"></div>
      <div className="relative max-w-[1000px] z-20 mx-auto px-[20px] md:px-[70px] lg:py-[100px] py-[30px] md:py-[70px] lg:px-[100px] text-center bg-black/20">
        <h1 className="text-[36px] md:text-[45px] font-normal text-[#fff]">
          {heading}
        </h1>
        <p className="text-[14px] md:text-[16px] text-[#fff] max-w-[750px] mx-auto">
          {subHeading || ""}
        </p>
      </div>
    </section>
  );
};

export default InnerPageHeading;
