import { useParams } from "react-router";
import useRestraurantMenu from "../utils/useRestrauntMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestraurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-extrabold text-2xl my-6">{name}</h1>
      <h3 className="font-bold text-xl">
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      {categories.map((category) => {
        return (
          <RestaurantCategory
            data={category?.card.card}
            key={category.card.card.categoryId}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
