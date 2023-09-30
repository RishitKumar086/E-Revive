import { useState, useEffect } from "react";
import gsap from "gsap";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Home from "../pages/Home";

export const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Animation code using GSAP
    gsap.from(".animate-this", {
      opacity: 0,
      x: -200, // Slide in from the left
      duration: 1.5,
      ease: "power3.out", // Example easing function
    });
  }, []);

  const loginuser = (e) => {
    e.preventDefault();

    Axios({
      method: "POST",
      data: {
        username: data.username,
        password: data.password,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => {
      navigate("/");
    });
  };

  return (
    
  
    <div className="bg-[#F9FAFB] animate-this h-screen w-screen flex items-center">
      <div class="w-1/1 h-screen hidden lg:block sm:h-90 md:h-95 lg:h-99 xl:h-119 2xl:h-110">
  <img src="https://s3n.cashify.in/estore/c4ca24749e8948119e99b2302ac900dc.png " alt="Placeholder Image" class="object-cover w-full h-full"/>
</div>
     
      <div className="h-max mx-auto flex flex-col items-center">
        <img
          className="h-[40px] w-[47px] mb-5"
          src="https://www.gadgetronicx.com/e-waste/lhs-recycle-icon2/"
          alt=""
        />
        <h1 className="text-xl font-bold text-center pb-10">
          Log in to your account
        </h1>
        <form
          className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm w-[320px]"
          onSubmit={loginuser}
        >
          <label>Username</label>
          <input
            className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
            type="text"
            placeholder="Enter username"
            value={data.username}
            onChange={(e) => {
              setData({ ...data, username: e.target.value });
            }}
          />
          <label>Password</label>
          <input
            className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
            type="password"
            placeholder="enter Password"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />
          <div className="flex">
            <Link to="/register" className="font-bold w-1/2 text-emerald-600">
              Register now
            </Link>
            <Link to="/" className="font-bold w-1/2 text-emerald-600">
              Login as facility
            </Link>
          </div>
          <button
            type="submit"
            className="bg-[#15803d] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#14532d]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
