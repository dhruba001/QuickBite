// src/components/Body.js
import ResturantCard from "./ResturantCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestraurantList from "../utils/useRestrauntList";

const Body = () => {
  const { listOfRestaurants, filteredRestaurant, setFilteredRestaurant } =
    useRestraurantList();
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>you're offline, check internet status</h1>;
  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="bg-slate-300">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border box-border"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1.5 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="px-3 py-1.5 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              const filterdListOfRestaurants = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurant(filterdListOfRestaurants);
            }}
          >
            Top rated restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <ResturantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
