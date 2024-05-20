import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const HeroCard = ({ title, des, prev, next, id, image }) => {
  return (
    <>
      <div id={id} className="relative w-full carousel-item">
        <div className="w-full h-full">
          <img src={image} className="object-cover w-full h-full" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative flex items-center max-w-[1440px] mx-auto h-full  px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
            <div className="max-w-[500px] mx-auto md:mx-0 md:max-w-[650px] lg:max-w-[700px] xl:max-w-[800px]">
              <h1 className="text-[42px] sm:text-[58px] md:text-[66px] font-frank lg:text-[72px] xl:text-[75px] 2xl:text-[90px] text-center md:text-left font-semibold text-white leading-[40px] sm:leading-[55px] md:leading-[70px] lg:leading-[75px] xl:leading-[80px] 2xl:leading-[90px]">
                {title}
              </h1>
              <p className="text-[14px] text-center md:text-left md:text-[16px] lg:text-[18px] text-white font-light my-3 sm:my-[16px] md:my-[35px]">
                {des}
              </p>
              <div className="justify-center gap-3 sm:flex md:justify-start">
                <Link className="block sm:flex mx-auto sm:m-0 px-[30px] py-[10px] md:px-[35px] md:py-[12px] lg:px-[40px] xl:py-[12px] hover:bg-transparent bg-[#F98D40] transition-colors border-[#F98D40] border rounded-lg  font-medium hover:text-[#F98D40] text-[#fff]">
                  Order Now
                </Link>
              </div>
              <div className="flex justify-center gap-2 mt-8 md:justify-start sm:gap-3">
                <a href={prev} className="btn btn-circle">
                  ❮
                </a>
                <a href={next} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
HeroCard.propTypes = {
  title: PropTypes.string,
  des: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  prev: PropTypes.string,
  next: PropTypes.string,
}
export default HeroCard
