// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <>
      <div className="w-full mb-[100px]">
        <div className="max-w-[1536px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4">
          <div className="w-full ">
            <Swiper
              loop={true}
              freeMode={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 10 },
                480: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 10 },
                768: { slidesPerView: 3, spaceBetween: 10 },
              }}
              modules={[Pagination, Autoplay]}
              className=" mySwiper"
            >
              <SwiperSlide>
                <TeamCard
                  image={
                    "https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208316.jpg"
                  }
                  text={"Chef"}
                  price={20}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamCard
                  image={
                    "https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208266.jpg"
                  }
                  text={"Chef"}
                  price={20}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamCard
                  image={
                    "https://img.freepik.com/premium-photo/man-cook-apron-chef-hat-modern-kitchen-preparing-fish-salmon-handsome-man-is-cooking-fresh_265223-87020.jpg"
                  }
                  text={"Chef"}
                  price={20}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamCard
                  image={
                    "https://img.freepik.com/premium-photo/portrait-beautiful-woman-chef-wearing-white-uniform-posing-kitchen-restaurant_171337-55789.jpg"
                  }
                  text={"Chef"}
                  price={20}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
