import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FreeMode, Pagination } from "swiper/modules"
import FeaturedCard from "./FeaturedCard"
import Heading from "../Heading"

const Featured = () => {
  return (
    <section className="w-full my-[80px] md:my-[100px]">
      <Heading
        subTitle={"---From 11:00am to 10:00pm---"}
        title={"ORDER ONLINE"}
      />
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <FeaturedCard
              image={"/assets/featured1.png"}
              title={"Salads"}
              link={"/"}
            ></FeaturedCard>
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard
              image={"/assets/featured2.png"}
              title={"Soups"}
              link={"/"}
            ></FeaturedCard>
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard
              image={"/assets/featured3.png"}
              title={"Pizzas"}
              link={"/"}
            ></FeaturedCard>
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard
              image={"/assets/featured4.png"}
              title={"desserts"}
              link={"/"}
            ></FeaturedCard>
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard
              image={"/assets/featured1.png"}
              title={"Salads"}
              link={"/"}
            ></FeaturedCard>
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard
              image={"/assets/featured2.png"}
              title={"Soups"}
              link={"/"}
            ></FeaturedCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Featured
