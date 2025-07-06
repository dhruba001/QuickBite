import ResturantCard from "./ResturantCard";
import { useState } from "react";
import { resList } from "../utils/mockData";

const Body = () => {
  // let listOfRestaurants = [
  //   {
  //     info: {
  //       id: "8032",
  //       name: "Burger King",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/f448a87b-da49-4da4-9fa4-d9ed0436bbe8_8032.jpg",
  //       cuisines: ["Burgers", "American"],
  //       avgRating: 4.3,
  //       sla: {
  //         slaString: "35-40 mins",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "8033",
  //       name: "Dominos",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/f448a87b-da49-4da4-9fa4-d9ed0436bbe8_8032.jpg",
  //       cuisines: ["Burgers", "American"],
  //       avgRating: 4.9,
  //       sla: {
  //         slaString: "35-40 mins",
  //       },
  //     },
  //   },
  // ];

  const [listOfRestaurants1, setListOfRestaurants1] = useState(resList);

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdListOfRestaurants = listOfRestaurants1.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants1(filterdListOfRestaurants);
          }}
        >
          Top rated restaurant
        </button>
        <button
          onClick={() => {
            setListOfRestaurants1(resList);
          }}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants1.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
