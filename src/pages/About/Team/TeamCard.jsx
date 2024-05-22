import { Link } from "react-router-dom";

const TeamCard = ({ image, text }) => {
  return (
    <div className="border rounded-md border-[#E8E8E8] p-2 sm:p-4 text-center">
      <Link className="relative rounded-md group/item ">
        <img
          src={image}
          className="w-full rounded-md max-h-[250px] object-cover"
          alt="img"
        />
      </Link>
      <h1 className="mt-6 text-[25px] font-bold line-clamp-2">{text}</h1>
      <h4 className="text-[#737373] text-[18px] font-semibold">Expert</h4>
    </div>
  );
};

export default TeamCard;
