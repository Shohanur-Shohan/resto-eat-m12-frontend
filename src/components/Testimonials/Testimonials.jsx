// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import { useRef } from "react";
import Heading from "../Heading";
// import Heading from "../../Heading";

const Testimonials = () => {
  const swiperRef = useRef(null);
  //  next & prev btn
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  //  next & prev btn

  return (
    <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 pb-[60px] md:pb-[100px]">
      <Heading title={"TESTIMONIALS"} subTitle={"---What Our Clients Say---"} />
      <div className="relative flex items-center justify-end gap-8 ml-auto">
        <div
          className="border border-[#F98D40] transition-colors rounded-full hover:bg-[#F98D40] swiper-button-prev group"
          onClick={goPrev}
        >
          <svg
            className="text-[#F98D40] group-hover:text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* </button> */}
        </div>
        <div
          className="border border-[#F98D40] rounded-full transition-colors hover:bg-[#F98D40] swiper-button-next group"
          onClick={goNext}
        >
          <svg
            className="text-[#F98D40] group-hover:text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <section className="pt-8">
        <Swiper
          loop={true}
          freeMode={true}
          useref={swiperRef}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1000: { slidesPerView: 3, spaceBetween: 10 },
          }}
          modules={[Autoplay, Navigation]}
          className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8 mySwiper"
        >
          {/* <div
            className={`grid items-center justify-center grid-cols-1 gap-8 lg:flex md:grid-cols-2`}
          > */}
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          {/* </div> */}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
