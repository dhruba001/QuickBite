import ResturantCard from "./ResturantCard";
//import { resList } from "../utils/mockData";

const Body = () => {
  let listOfRestaurants = [
    {
      info: {
        id: "8032",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/f448a87b-da49-4da4-9fa4-d9ed0436bbe8_8032.jpg",
        cuisines: ["Burgers", "American"],
        avgRating: 4.3,
        sla: {
          slaString: "35-40 mins",
        },
      },
    },
    {
      info: {
        id: "8033",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/f448a87b-da49-4da4-9fa4-d9ed0436bbe8_8032.jpg",
        cuisines: ["Burgers", "American"],
        avgRating: 4.9,
        sla: {
          slaString: "35-40 mins",
        },
      },
    },
  ];

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            console.log(listOfRestaurants);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
