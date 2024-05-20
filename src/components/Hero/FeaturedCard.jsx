import { Link } from "react-router-dom"

const FeaturedCard = ({ image, title, link }) => {
  return (
    <>
      <Link to={link}>
        <div className="overflow-hidden group">
          <img
            src={image}
            className="w-full h-full group-hover:scale-[1.05] transition-all"
            alt="img"
          />
          <h1 className="text-[30px] absolute bottom-3 left-[36%] text-white z-10">
            {title}
          </h1>
          <div className="absolute top-0 left-0 z-0 w-full h-full bg-overlay2"></div>
        </div>
      </Link>
    </>
  )
}

export default FeaturedCard
