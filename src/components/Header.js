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
          <li className="px-4 text-xm">
            Online Status :{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="text-xm">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-xm">
            <Link to="/about">AboutUs</Link>
          </li>
          <li className="px-4 text-xm">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 text-xm">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-xm">Cart</li>
          <li className="px-4">
            <button
              className="login text-xm"
              onClick={() => {
                if (btnName === "Login") setBtnName("Logout");
                else setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4 font-bold text-xm">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
