import ResturantCard from "./ResturantCard";
import { resList } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button className="filter-btn">Top rated restaurant</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
