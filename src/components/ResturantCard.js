import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[350px] bg-red-100 rounded-3xl hover:bg-red-200">
      <img
        className="rounded-3xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-extrabold py-2 text-xl">{name}</h3>
      <h4 className="font-serif">{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-lime-400 text-green-800 rounded-md m-2 p-2">
          open
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
