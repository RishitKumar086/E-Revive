import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Axios from "axios";

const Navbar = () => {
  const { isLoggedIn, login } = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    // Redirect to the /login route and making isLoggedIn true
    if (!isLoggedIn) {
      login();
      navigate("/login");
    } else {
      Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/logout",
      }).then((res) => {
        window.location.reload();
      });
    }
  };

  return (
    <nav className="bg-white light:bg-gray-900 sticky py-2 w-full z-20 top-0 left-0 shadow border-gray-200 light:border-gray-600">
      <div className="max-w-screen-xl text-black flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="" className="flex items-center">
          <img
            src="https://www.gadgetronicx.com/e-waste/lhs-recycle-icon2/"
            className="h-8 mr-3"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap light:text-white">
            E-revive
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            onClick={handleLoginButtonClick}
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none  focus:ring-green-300 font-medium rounded-lg  px-4 py-2 text-center mr-3 md:mr-0 light:bg-green-600 light:hover:bg-green-700 light:focus:ring-green-800"
          >
            {isLoggedIn ? "Log Out" : "Log in"}
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-black-500 text-xl rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 light:text-gray-400 light:hover:bg-gray-700 light:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white light:bg-gray-800 md:light:bg-gray-900 light:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:light:hover:text-green-500 light:text-white light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:light:hover:text-green-500 light:text-white light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:light:hover:text-green-500 light:text-white light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={()=>document.getElementById("services").scrollIntoView({behavior:"smooth"})}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:light:hover:text-green-500 light:text-white light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:light:hover:text-green-500 light:text-white light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
