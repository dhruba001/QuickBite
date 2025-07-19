import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-x-gray-300 border-b-2 text-left flex justify-end "
        >
          <div className="w-11/12">
            <div>
              <span className="font-bold py-2">{item.card.info.name}</span>
            </div>
            <div>
              <span className="font-bold">
                ₹
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </span>
            </div>
            <div>
              <p className="text-xs p-2">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-5/12 m-10">
            <div>
              <button className="p-2 mx-16 rounded-lg bg-white shadow-lg">
                Add +
              </button>
            </div>
            <div>
              <img src={CDN_URL + item.card.info.imageId} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
