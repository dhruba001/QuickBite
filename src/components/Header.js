import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
      <div className="logo-container">
        <img className="w-25 rounded-3xl" src={LOGO_URL} alt="QuickBite_LOGO" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-xl">
            Online Status :{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/about">AboutUs</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-xl">Cart</li>
          <li className="px-4">
            <button
              className="login text-xl"
              onClick={() => {
                if (btnName === "Login") setBtnName("Logout");
                else setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4 font-bold text-xl">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
