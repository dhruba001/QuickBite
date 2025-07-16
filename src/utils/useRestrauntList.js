import { useState, useEffect } from "react";
import { SWIGGY_API_LIVE_V5 } from "./constants";

const useRestraurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(SWIGGY_API_LIVE_V5);
      const json = await data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    };
    fetchData();
  }, []);

  return { listOfRestaurants, filteredRestaurant, setFilteredRestaurant };
};

export default useRestraurantList;
