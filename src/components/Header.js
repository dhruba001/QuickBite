import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
      <div className="logo-container">
        <img className="w-25 rounded-3xl" src={LOGO_URL} alt="QuickBite_LOGO" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-2xl">
            Online Status :{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="text-2xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-2xl">
            <Link to="/about">AboutUs</Link>
          </li>
          <li className="px-4 text-2xl">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 text-2xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-2xl">Cart</li>
          <li className="px-4 text-2xlss">
            <button
              className="login"
              onClick={() => {
                if (btnName === "Login") setBtnName("Logout");
                else setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
