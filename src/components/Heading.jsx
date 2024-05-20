const Heading = ({ subTitle, title }) => {
  return (
    <>
      <div className="max-w-[300px] mx-auto flex flex-col items-center text-center">
        <p className="text-[#D99904] text-[16px] md:text-[18px]">{subTitle}</p>
        <div className="my-2 divider"></div>
        <h1 className="text-[#151515] text-[28px] font-medium">{title}</h1>
        <div className="my-2 divider"></div>
      </div>
    </>
  );
};

export default Heading;
