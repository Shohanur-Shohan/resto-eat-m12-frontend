const Banner = () => {
  return (
    <section className="w-full my-[80px]">
      <div className="max-w-[1440px] mx-auto px-[20px] py-[20px] md:px-[70px] lg:px-[100px] md:py-[70px] lg:py-[100px] bg-[url('/assets/banner.png')] object-cover bg-no-repeat bg-cover bg-center">
        <div className="px-[20px] md:px-[70px] lg:py-[100px] py-[30px] md:py-[70px] lg:px-[100px] text-center bg-white">
          <h1 className="text-[36px] md:text-[45px] font-normal text-[#151515]">
            Resto Eat
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#151515] max-w-[750px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Banner
