import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.shutterstock.com/image-vector/food-delivery-black-color-label-260nw-788158552.jpg"
          alt="QuickBite_LOGO"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const ResturantCard = (props) => {
  const { resData } = props;
  //console.log(props);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisine}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

const resObj = {
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  info: {
    id: "8032",
    name: "Burger King",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/f448a87b-da49-4da4-9fa4-d9ed0436bbe8_8032.jpg",
    locality: "RMV 2nd Stage",
    areaName: "Sanjaynagar",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "American"],
    avgRating: 4.3,
    parentId: "166",
    avgRatingString: "4.3",
    totalRatingsString: "84K+",
    sla: {
      deliveryTime: 40,
      lastMileTravel: 9,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "9.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-07-06 05:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹29",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard resData={resObj} />
        <ResturantCard resData={resObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
